const initialState = {
	name: null,
	secondName: null,
	company: null,
	phone: null,
	description: null
};

export const contactsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				...state
			};
	}
};
