import React from 'react';

// const style = {
//   margin: 12,
// };

import * as constants from '../constants';

export default class Alternative extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasInitiallyRendered: false
    }

    // this.activateMetaView = this.activateMetaView.bind(this);
    // this.activateBlockerView = this.activateBlockerView.bind(this);

  }

  componentDidMount() {
    this.setState({hasInitiallyRendered: true});
  }

  shouldComponentUpdate() {
    return !this.state.hasInitiallyRendered;
  }

  // activateMetaView(viewMetaSlideIndex) {
  //   console.log(this.props);
  //   this.props.activateMetaView(viewMetaSlideIndex);
  // }

  // activateBlockerView() {
  //   console.log(this.props);
  //   this.props.activateBlockerView();
  // }

  render() {

    return (
      <span>
        {constants.DEFAULT_ALTERNATIVE_ACTIVITIES[Math.floor(Math.random() * constants.DEFAULT_ALTERNATIVE_ACTIVITIES.length)].name}
      </span>
    );
  }
}
