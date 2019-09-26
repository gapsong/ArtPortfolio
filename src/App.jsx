import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HelloWorld title="Sag ich nicht" />;
  }
}

export default hot(App);