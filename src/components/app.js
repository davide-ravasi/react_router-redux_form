import React, { Component } from 'react';

export default class App extends Component {
			/* to tell react where to put nested components */
  render() {
    return (
		<div>
			{this.props.children}
		</div>
    );
  }
}
