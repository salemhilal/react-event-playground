import { Action } from "redux";
import { Models } from "types";

export const STORE_FEED_ITEMS = "STORE_FEED_ITEMS";

// Type keys

export enum FeedTypeKeys {
    STORE_FEED_ITEMS = "STORE_FEED_ITEMS",
    __OTHER_ACTION = "__not_defined_action_type"
}

// Action types

export interface StoreFeedAction extends Action {
    type: FeedTypeKeys.STORE_FEED_ITEMS;
    payload: Array<Models.FbEvent>;
}

export interface OtherAction extends Action {
    type: FeedTypeKeys.__OTHER_ACTION;
}

// The union of all action types

export type FeedActionTypes = StoreFeedAction | OtherAction;
