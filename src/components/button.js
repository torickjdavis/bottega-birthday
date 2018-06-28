import React from 'react';

const Button = (title, callback) => {
	return (
		<button onClick={callback}>
			{ title }
		</button>
	);
};

export default Button;
