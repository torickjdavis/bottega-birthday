import React, { Component } from 'react';

class Clock extends Component {
	render() {
		return (
			<div className="clock">
				<div className="clock__days">
					<label className="clock__title">DAYS</label>
					<label className="clock__amount">20</label>
				</div>	
				<div className = "clock__hours" >
					<label className="clock__title">HRS</label>
					<label className="clock__amount">16</label>
				</div>
				<div className="clock__minutes">
					<label className="clock__title">MINS</label>
					<label className="clock__amount">30</label>
				</div>
				<div className="clock__seconds">
					<label className="clock__title">SECS</label>
					<label className="clock__amount">12</label>
				</div>
			</div>
		);
	}
}

export default Clock;
