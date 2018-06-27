import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Picker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		console.log("Trying to handle date of: ", date._d);
		this.setState({ startDate: date });
	}

	render() {
		return (
			<main>
				<DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
			</main>
		);
	}
}

export default Picker;
