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
        let request = new Request(next);
        return fetch(request, { credentials: "same-origin" })
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

export function fetchPageEventData(pageId: number): Promise<Array<Models.FbEvent>> {
    let url = `https://graph.facebook.com/v2.8/${pageId}/events?access_token=${
        FACEBOOK_TOKEN
    }&fields=start_time,place,name,cover,attending_count,interested_count,description`;

    return getAllPagesFromFacebookUrl(url);
}
