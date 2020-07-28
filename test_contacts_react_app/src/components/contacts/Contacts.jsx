import React from 'react';
import './Contacts.scss';

const Contacts = (props) => {
	return (
		<div className='row contacts_row'>
			<div className='col'>
				<div>
					<button>Add contact</button>
				</div>
				<div>contacts</div>
			</div>
			<div className='col'> Info </div>
		</div>
	);
};

export default Contacts;
