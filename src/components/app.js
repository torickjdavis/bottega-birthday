import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      startDate: moment()
    };
  }

  handleGenerate = function() {
    this.setState({ active: true });

    var countDowndate = new Date("Sep 5, 2018 15:37:25").getTime();

    var x = setInterval(() => {
      //get today

      var now = new Date().getTime();
      var distance = countDowndate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const time = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      console.log(time);

      if (distance < 0) { // if the countdown is over, stop
        clearInterval(x);
      }
    }, 1000); // 1000ms (aka 1s)
  }.bind(this);


  renderItems = function() {
    if (this.state.active) {
      return [
        <Clock />,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining until your num-th birthday!</label>
      ];
    }
    else {
      return [
        <Picker />,
        Button('Generate Countdown', () => this.handleGenerate())
      ];
    }
  }.bind(this);

  render() {
    // return (<div className="grid"><Clock /></div>);
    return (
      <div className="grid">
        <h1>Birthday Countdown</h1>
        <div className="skew-dark"></div>
        <div className="skew-light"></div>
        { this.renderItems() }
      </div>
    );
  }
}
