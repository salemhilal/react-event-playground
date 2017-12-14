/**
 * Given a predicate and a function that returns a promise (an action),
 * call the action while the predicate evaluates to true, and return a
 * promise that resolves whenever the predicate returns false. This is
 * effectively a while loop using promises. You will likely need to call
 * this inside a function that provides access to some sort of in-scope
 * state.
 *
 * @param  {()   => boolean} predicate - continue loop while this is true
 * @param  {()   => Promise} action - the body of the loop to evaluate
 * @return {Promise}
 */
function promiseWhile<T>(
    predicate: () => boolean,
    action: () => Promise<T>
): Promise<T> {
    function loop(): Promise<any> {
        if (!predicate()) {
            return Promise.resolve();
        }
        return Promise.resolve(action()).then(loop);
    }
    return Promise.resolve().then(loop);
}

fetch(
    `https://graph.facebook.com/v2.8/1188861887793290/events?access_token=FACEBOOK_TOKEN&fields=start_time,place,name,cover,attending_count,interested_count,description`,
    {
        credentials: "same-origin"
    }
)
    .then(response => {
        return response.json();

    })
    .then(json => {
        // Ok this seems to work!
        console.log(json);
    });

interface FbResponseBody {
    paging: { next: string } | null;
    data: Array<Object> | null;
}

/**
 * Given a facebook URL string, fetch all the possible paginated data
 * all at once. Returns a promise.
 * @param {string} url
 */
function getAllPagesFromFacebookUrl(url: string): Promise<Array<Object>> {
    let next: string | null = url;
    let data: Array<Object> = [];

    function action(): Promise<void> {
        return fetch(next, { credentials: "same-origin" })
            .then(response => {
                return response.json();
            })
            .then((body: FbResponseBody) => {
                next = (body.paging && body.paging.next) || null;
                data = data.concat(body.data || []);
            });
    }

    function predicate(): boolean {
        return !!next;
    }

    return promiseWhile(predicate, action).then(() => { return data; })
}

function getAllEventsFromUrl() {
    return Promise.resolve("lol oh u");
}

export { getAllEventsFromUrl , getAllPagesFromFacebookUrl };
