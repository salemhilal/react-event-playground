// POLYFILLS
// Put polyfills and other global-modifying imports here

import "whatwg-fetch"; // a polyfill for `fetch()`
import "laurence"; // Remove for production

// Ok, regular code from here on out.

import * as ReactDOM from "react-dom";
import * as React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

let store = createStore(reducer, applyMiddleware(thunk));

function reducer() {}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector("#app")
    );
});
