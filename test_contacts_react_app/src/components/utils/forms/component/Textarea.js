import React from 'react';
import { FormControl } from './formControl/FromControl';

export const Textarea = (props) => {
	const { input, meta, ...restProps } = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	);
};
