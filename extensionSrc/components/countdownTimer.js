import React, { Component } from 'react';

const URL = window.location.hostname;


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
        console.log("WOW");
        console.log(this.props.siteVisitCount);


        chrome.storage.sync.get(URL, (db) => {

            this.setState({ seconds: db[URL].count });

            debugger;
            console.log("countdownTimer.js componentDidMount()");
        });

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