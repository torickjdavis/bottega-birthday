import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component {
	handleChange = function(date) {
		this.props.callback(date);
	}.bind(this);

	render() {
		return (
			<main>
				<DatePicker selected={this.props.startDate} onChange={this.handleChange}/>
			</main>
		);
	}
}

export default Picker;
