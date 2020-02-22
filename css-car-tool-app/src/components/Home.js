import React from 'react';

import './Home.scss';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return <div className="Home">
      <h2>Welcome to Little Timmy's Auto Car Tool!</h2>
    </div>;

  }
}