import React from 'react';

const Button = (title, callback) => {
	return (
		<button key={1} onClick={callback}>
			{ title }
		</button>
	);
};

export default Button;
