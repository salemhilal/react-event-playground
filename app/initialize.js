import 'whatwg-fetch';
import ReactDOM from "react-dom";
import React from "react";
import App from "components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

function reducer() {}

let store = createStore(reducer);

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector("#app")
    );
});
