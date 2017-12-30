import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../types";
import { fetchPageEventData } from "../services/network/facebook";

interface StateProps {}

interface DispatchProps {
    fetchEventData(): void;
}

type AppProps = StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch<State>): DispatchProps {
    return {
        fetchEventData: function() {
            return dispatch((dispatch: Dispatch<State>) => {
                fetchPageEventData(1188861887793290).then(function(events) {
                    let eventNames = events.map(event => {
                        return event.name;
                    });
                    console.log("you did it! Here's dispatch", dispatch);
                    console.log(
                        "Here are the names of all the events we got back:",
                        eventNames
                    );
                });
            });
        }
    };
}

class App extends React.Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div id="content">
                <h5>Time to do work in the future!</h5>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchEventData();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
