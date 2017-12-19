import { Models } from "../types";
import { promiseWhile } from "./tools";
import { FACEBOOK_TOKEN } from "../keyfile.js";

/**
 * Given a facebook URL string, fetch all the possible paginated data
 * all at once. Returns a promise.
 * @param {string} url
 */
function getAllPagesFromFacebookUrl(
    url: string
): Promise<Array<Models.FbEvent>> {
    let next: string = url;
    let data: Array<Models.FbEvent> = [];

    function action(): Promise<void> {
        return fetch(next, { credentials: "same-origin" })
            .then(response => {
                return response.json();
            })
            .then((body: Models.FbResponseBody) => {
                next = (body.paging && body.paging.next) || "";
                data = data.concat((body.data as Array<Models.FbEvent>) || []);
            });
    }

    function predicate(): boolean {
        return !!next;
    }

    return promiseWhile(predicate, action).then(() => {
        return data;
    });
}

function fetchPageEventData(
    pageId: number
): Promise<Array<Models.FbEvent>> {
    return fetch(
        `https://graph.facebook.com/v2.8/${
            pageId
        }/events?access_token=${FACEBOOK_TOKEN}&fields=start_time,place,name,cover,attending_count,interested_count,description`,
        {
            credentials: "same-origin"
        }
    ).then(response => {
        return response.json();
    });
    // .then(json => {
    //     // Ok this seems to work!
    //     console.log(json);
    // });
}

fetchPageEventData(1188861887793290).then(json => {
    // Ok this seems to work!
    console.log(json);
});


export {
    fetchPageEventData
}
