export namespace Models {
    export interface FbResponseBody {
        paging: { next: string } | null;
        data: Array<Object> | null;
    }

    export interface FbEvent {
        name: string;
        id: string;
    }
}

export interface ReduxAction {
    type: string;
    payload?: Object;
}

export namespace State {
    export interface FeedState {
        eventFeed?: Array<Models.FbEvent>;
    }
    export interface Global {
        feed?: FeedState;
    }
}
