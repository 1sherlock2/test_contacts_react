import React from 'react';
import './FromControl.scss';

export const FormControl = ({ input, meta, ...props }) => (
	<div>
		<div>{props.children}</div>
		<div className='error'>{meta.touched && meta.error && <span>{meta.error}</span>}</div>
	</div>
);
