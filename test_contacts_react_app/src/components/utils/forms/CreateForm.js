import { Field } from 'redux-form';
import React from 'react';

export const createFrom = (name, component, type, className, id, placeholder, validate) => {
	return (
		<div>
			<Field name={name} component={component} type={type} className={className} id={id} placeholder={placeholder} validate={validate} />
		</div>
	);
};
