import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';

export default class App extends Component {
  render() {
    // return (<div className="grid"><Clock /></div>);
    return (
      <div className="grid">
        <h1>Birthday Countdown</h1>
        <div className="skew-dark"></div>
        <div className="skew-light"></div>
        <Picker />
        { Button(`Generate Countdown`) }
        <Clock />
      </div>
    );
  }
}
