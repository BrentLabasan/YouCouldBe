import React, { Component } from 'react';

export default class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        console.log("CountdownTimer");
        console.log(this.props);
        this.state = {
            seconds: props.siteVisitCount
        };
    }

    tick() {
        this.setState((prevState) => ({
            seconds: prevState.seconds - 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <span id="ycb-countdownTimer">
                {this.props.siteVisitCount} <br />
                {this.state.seconds}
            </span>
        );
    }
}