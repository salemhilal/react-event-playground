import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State, Models } from "types";
import { fetchPageEventData } from "services/network/facebook";
import { storeFeedItems } from "./actions";

interface StateProps {
    feedItems: Array<Models.FbEvent>;
}

interface DispatchProps {
    fetchEventData(): void;
}

type AppProps = StateProps & DispatchProps;

function mapStateToProps(state: State.Global): StateProps {
    return {
        feedItems: (state.feed && state.feed.eventFeed) || []
    };
}

function mapDispatchToProps(dispatch: Dispatch<State.Global>): DispatchProps {
    return {
        fetchEventData: function() {
            return dispatch((dispatch: Dispatch<State.Global>) => {
                fetchPageEventData(1188861887793290).then(function(events) {
                    let eventNames = events.map(event => {
                        return event.name;
                    });
                    dispatch(storeFeedItems(events));
                });
            });
        }
    };
}

class Feed extends React.Component<AppProps, State.Global> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div id="content">
                <h5>Here's the feed</h5>
                {this.props.feedItems.map((fbEvent: Models.FbEvent) => {
                    return <div key={fbEvent.id}>{fbEvent.name}</div>;
                })}
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchEventData();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
