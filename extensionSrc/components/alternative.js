import React from 'react';

// const style = {
//   margin: 12,
// };


const DEFAULT_ALTERNATIVE_ACTIVITIES = [

      {name: "practice singing", lenMin: 5, tags: ['']},

      {name: "wash the dishes", lenMin: 5, tags: ['chore']},
      {name: "take the trash out", lenMin: 3, tags: ['chore']},

      {name: "walk around the block", lenMin: 5, tags: ['exercise']},

      {name: "standing pike", lenMin: 1, tags: ['stretch']},

      {name: "meditate", lenMin: 5, tags: ['mental health']},

      {name: "call your mom", lenMin: 5, tags: ['family']}
    ];

    // {name: "", lenMin: , tags: ['']},

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
        {DEFAULT_ALTERNATIVE_ACTIVITIES[Math.floor(Math.random() * DEFAULT_ALTERNATIVE_ACTIVITIES.length)].name}
      </span>
    );
  }
}
