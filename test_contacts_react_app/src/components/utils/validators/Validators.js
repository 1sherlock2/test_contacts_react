export const requiredField = (value) => {
	if (value) {
		return undefined;
	} else {
		return 'Field is required';
	}
};

export const maxLength = (maxLength) => (value) => {
	if (value && value.length > maxLength) {
		return `Max length is ${maxLength} symbols`;
	}
	return undefined;
};

export const minLength = (minLength) => (value) => {
	if (value && value.length < minLength) {
		return `Min length is ${minLength} symbols`;
	}
	return undefined;
};
