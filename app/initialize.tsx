import "whatwg-fetch";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import { fetchPageEventData } from "./network/facebook";

import { FACEBOOK_TOKEN } from "./keyfile.js";

let store = createStore(reducer);
function reducer() {}

console.log("fb token:", FACEBOOK_TOKEN);

document.addEventListener("DOMContentLoaded", () => {
    fetchPageEventData(1188861887793290).then(function(events) {
        let lol = events.map(event => {
            return event.name;
        });
        console.log(
            "Here is what the callback gave us, except this time with webpack:",
            lol
        );
    });

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector("#app")
    );
});
