import React from 'react';
import './Header.css';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../../features/mapData/authSlice';


const Header = () => {

	const dispatch = useDispatch();

	const { grantAccess } = useSelector(selectAuth);


	return (
		<header>
			<nav>
				<div className='nav-logo'>
					we<span className='nav-logo__bold'>spectrum</span>
				</div>
				{grantAccess && (
					<div className='nav-user'>
						<div className='nav-user__name'>admin</div>
						<button className='nav-user__cta' type='button' onClick={() => dispatch(logout())}>
							logout
						</button>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
