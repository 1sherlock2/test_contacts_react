import React from 'react';
import { FormControl } from './formControl/FromControl.js';

export const Input = (props) => {
	const { input, meta, ...restProps } = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	);
};
