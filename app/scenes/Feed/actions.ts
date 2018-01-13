import { STORE_FEED_ITEMS } from "./actionTypes";
import { ReduxAction, Models } from "types";

export function storeFeedItems(payload: Array<Models.FbEvent>): ReduxAction {
    return {
        type: STORE_FEED_ITEMS,
        payload: payload
    };
}
