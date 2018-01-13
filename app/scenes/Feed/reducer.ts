import { State } from "types";
import { FeedActionTypes, FeedTypeKeys } from "./actionTypes";

export function feedReducer(
    state: State.FeedState,
    action: FeedActionTypes
): State.FeedState {
    if (state === undefined) {
        return defaultState();
    }

    switch (action.type) {
        case FeedTypeKeys.STORE_FEED_ITEMS:
            // TODO: IMMUTABLE THIS PLEASE
            console.log("store feed items", action);
            var newState = Object.create(state);
            newState.eventFeed = action.payload;
            console.log("state with items in it", newState);
            return Object.freeze(newState);

        default:
            return state;
    }
}

function defaultState(): State.FeedState {
    return {
        eventFeed: []
    };
}
