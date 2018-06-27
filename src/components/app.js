import React, { Component } from 'react';
import Picker from './picker';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <h1>Birthday Countdown</h1>
        <div className="skew-dark"></div>
        <div className="skew-light"></div>
        <Picker />
      </div>
    );
  }
}
