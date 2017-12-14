import "whatwg-fetch";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "components/App";
import {
    getAllEventsFromUrl,
    getAllPagesFromFacebookUrl
} from "network/facebook";

import { FACEBOOK_TOKEN } from "./keyfile.js";

let store = createStore(reducer);
function reducer() {}

console.log('fb token:', FACEBOOK_TOKEN);


document.addEventListener("DOMContentLoaded", () => {
    console.log("getAllPagesFromFacebookUrl", getAllPagesFromFacebookUrl);

    getAllPagesFromFacebookUrl(
        `https://graph.facebook.com/v2.8/1188861887793290/events?access_token=${FACEBOOK_TOKEN}&fields=start_time,place,name,cover,attending_count,interested_count,description`
    ).then(function(events) {
        let lol = events.map((event) => {
            return event.name
        })
        console.log("here is what the callback gave us:", lol);
    });

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector("#app")
    );
});
