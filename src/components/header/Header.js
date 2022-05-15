import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<nav>
				<div className='nav-logo'>
					we<span className='nav-logo__bold'>spectrum</span>
				</div>
				<div className='nav-user'>
					<div className='nav-user__name'>admin</div>
					<button className='nav-user__cta' type='button'>
						logout
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
