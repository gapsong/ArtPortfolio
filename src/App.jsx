import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import MainPage from './components/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainPage title="Sag ich nicht" />;
  }
}

export default hot(App);
