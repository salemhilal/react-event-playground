import "whatwg-fetch";
import "laurence"; // Remove for production

import * as ReactDOM from "react-dom";
import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import { fetchPageEventData } from "./network/facebook";

import { FACEBOOK_TOKEN } from "./keyfile.js";

let store = createStore(reducer);
function reducer() {}

document.addEventListener("DOMContentLoaded", () => {
    fetchPageEventData(1188861887793290).then(function(events) {
        let eventNames = events.map(event => {
            return event.name;
        });
        console.log(
            "Here are the names of all the events we got back:",
            eventNames
        );
    });

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector("#app")
    );
});
