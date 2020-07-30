import React from 'react';
import './Contacts.scss';
import classname from 'classnames';
import { NavLink } from 'react-router-dom';

const Contacts = (props) => {
	return (
		<div className='row contacts_row'>
			<div className='col'>
				<NavLink to='/add_contact'>
					<div className='add_contact'>
						<button type='button' class='btn btn-secondary'>
							<div>Add Contact </div>
						</button>
						<div className='add_contact_svg'>
							<svg
								width='1em'
								height='1em'
								viewBox='0 0 16 16'
								class='bi bi-plus-square'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' d='M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z' />
								<path fill-rule='evenodd' d='M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z' />
								<path
									fill-rule='evenodd'
									d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
								/>
							</svg>
						</div>
					</div>
				</NavLink>
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
										<div className='change_contact'>
											<NavLink to={`/edit_contact/${item._id}`} className='change_contact_a'>
												<div className='card-link edit_contact'>
													<div>Edit</div>
													<div>
														<svg
															width='1em'
															height='1em'
															viewBox='0 0 16 16'
															class='bi bi-pencil'
															fill='currentColor'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																fill-rule='evenodd'
																d='M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z'
															/>
															<path
																fill-rule='evenodd'
																d='M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z'
															/>
														</svg>
													</div>
												</div>
											</NavLink>
											<div className='delete_contact'>
												<div className='card-link' onClick={() => props.deleteContact(item._id)}>
													Delete
												</div>
												<div>
													<svg
														width='1em'
														height='1em'
														viewBox='0 0 16 16'
														class='bi bi-archive'
														fill='currentColor'
														xmlns='http://www.w3.org/2000/svg'>
														<path
															fill-rule='evenodd'
															d='M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z'
														/>
														<path
															fill-rule='evenodd'
															d='M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z'
														/>
													</svg>
												</div>
											</div>
										</div>
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
										{item.name} {item.secondName ? item.secondName : null}
									</h4>
									<h5 className='card-title'>Phone: {item.phone}</h5>
									<h6 className='card-subtitle mb-2 text-muted'> {item.company ? `Company: ${item.company}` : null}</h6>
									<p className='card-text'> {item.description ? `Other information: ${item.description}` : null}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Contacts;
