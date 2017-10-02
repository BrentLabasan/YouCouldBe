import React, { Component } from 'react';

export default class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <span id="ycb-countdownTimer">
                {this.props.siteVisitCount}
            </span>
        );
    }
}