// POLYFILLS
// Put polyfills and other global-modifying imports here

import "whatwg-fetch"; // a polyfill for `fetch()`
import "laurence"; // Remove for production

// Ok, regular code from here on out.

import * as ReactDOM from "react-dom";
import * as React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { State } from "types";

import Feed from "scenes/Feed/index";
import { feedReducer } from "scenes/Feed/reducer";

console.log(feedReducer);

var combinedReducer = combineReducers<State.Global>({
    feed: feedReducer
});

// TODO: can I make the state a class so that I can default field values?
let store = createStore(combinedReducer, {}, applyMiddleware(thunk));

console.log("initial store", store);

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Provider store={store}>
            <Feed />
        </Provider>,
        document.querySelector("#app")
    );
});
