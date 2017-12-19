import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div id="content">
                <h5>Time to do work in the future!</h5>
            </div>
        );
    }
}

function mapStateToProps(state: Object) : Object {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch<Object>) : Object {
    return {};
}

export { App as default };
