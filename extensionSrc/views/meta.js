import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class TabsExampleSwipeable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div id="ycb-meta">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="ALTERNATIVES" value={0} />
                    <Tab label="OPTIONS" value={1} />
                    <Tab label="HELP" value={2} />
                    <Tab label="ABOUT" value={3} />
                    <Tab label="DONATE" value={4} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h2>ALTERNATIVES</h2>
                        <h3>Social Networks</h3>
                        <h3>Pornography</h3>
                        <h3>Link Aggregators</h3>
                        <h3>Media</h3>
                    </div>
                    <div>
                        <h2>OPTIONS</h2>
                    </div>
                    <div>
                        <h2>HELP</h2>
                    </div>
                    <div>
                        <h2>ABOUT</h2>
                    </div>
                    <div>
                        <h2>DONATE</h2>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}