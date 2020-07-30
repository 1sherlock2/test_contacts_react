import React from 'react';
import './Contacts.scss';
import classname from 'classnames';
import { NavLink } from 'react-router-dom';

const Contacts = (props) => {
	return (
		<div className='row contacts_row'>
			<div className='col'>
				<div className='add_contact'>
					<NavLink to='/add_contact'>
						<button>Add contact</button>
					</NavLink>
				</div>
				<div>
					{props.contactInfo &&
						props.contactInfo.map((item, index) => {
							return (
								<div
									key={item._id}
									className={classname(
										{
											active: props.activeClass === index
										},
										'card'
									)}
									onClick={() => props.selectActiveElement(item._id, index)}>
									<div className='card-body'>
										<h4 className='card-title'>
											{item.name} {item.secondName}
										</h4>
										<NavLink to={`/edit_contact/${item._id}`}>
											<button href='#' className='card-link'>
												Edit
											</button>
										</NavLink>
										<button className='card-link' onClick={() => props.deleteContact(item._id)}>
											Delete
										</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div>
				{props.fullContact &&
					props.fullContact.map((item) => {
						return (
							<div className='card' key={item._id}>
								<div className='card-body'>
									<h4 className='card-title'>
										{item.name} {item.secondName}
									</h4>
									<h5 className='card-title'>Phone: {item.phone}</h5>
									<h6 className='card-subtitle mb-2 text-muted'>{item.company}</h6>
									<p className='card-text'>{item.description}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Contacts;
