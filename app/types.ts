export namespace Models {

    export interface FbResponseBody {
        paging: { next: string } | null;
        data: Array<Object> | null;
    }

    export interface FbEvent {
        name: string,
    }

}


export interface State {


}
