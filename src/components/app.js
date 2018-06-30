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
      startDate: moment(),
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      age: 0
    };

    this.timer = 0;
  }

  handleChange = function(date) {
    console.log("APP JS HANDLE CHANGE ", date._d);
    clearInterval(this.timer);
    this.setState({ startDate: date });
  }.bind(this);

  handleGenerate = function() {
    var birthday = this.state.startDate.toDate();
    var today = new Date();

    var timeBetween = today.getTime() - birthday.getTime();
    var daysOld = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    var age = Number((daysOld / 365).toFixed(0));

    this.setState({ active: true, age });

    var currentMonth = today.getMonth();
    var birthMonth = birthday.getMonth();

    if (birthMonth > currentMonth) {
      birthday.setFullYear(today.getFullYear());
    }
    else if (birthMonth < currentMonth) {
      birthday.setFullYear(today.getFullYear() + 1);
    }
    else if (birthMonth == currentMonth) {
      var currentDate = today.getDate();
      var birthdayDate = birthday.getDate();

      if (birthdayDate > currentDate) {
        birthday.setFullYear(today.getFullYear());
      }
      else if (birthdayDate <= currentDate) {
        birthday.setFullYear(today.getFullYear() + 1);
      }
    }

    var countDowndate = birthday.getTime();

    this.timer = setInterval(function() {

      var now = today.getTime();
      var distance = countDowndate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        timeRemaining: {
          days, // is ES6 for days: days. This works because they are the same name
          hours,
          minutes,
          seconds
        }
      });

      if (distance < 0) { // if the countdown is over, stop
        clearInterval(this.timer);
      }
    }.bind(this), 1000);
  }.bind(this);


  renderItems = function() {
    if (this.state.active) {
      return [
        <Clock timeRemaining={this.state.timeRemaining}/>,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining until you turn {this.state.age}!</label>
      ];
    }
    else {
      return [
        <Picker startDate={this.state.startDate} callback={(date) => this.handleChange(date)}/>,
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
