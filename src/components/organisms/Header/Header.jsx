import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import Notification from '../../../assets/notification.png';
import Search from '../../../assets/search.png';
import Profile from '../../../assets/profile_white.png';

import './style.css';

const activeStyle = { color: 'green', fontWeight: '600' };

const Header = ({ pageName }) => {
	const history = useHistory();
	useEffect(() => {
		history.replace('/orders');
	});

	return (
		<div className="header_container">
			<img src={Logo} alt="" width="155" />
			<div className="link__container">
				<NavLink to="/dashboard" activeStyle={activeStyle}>
					Dashboard
				</NavLink>
				<NavLink to="/orders" activeStyle={activeStyle}>
					Orders
				</NavLink>
				<NavLink to="/financials" activeStyle={activeStyle}>
					Financials
				</NavLink>
				<NavLink to="/support" activeStyle={activeStyle}>
					Support
				</NavLink>
			</div>
			<div>
				<img src={Search} alt="" className="icon" />
				<img src={Notification} alt="" className="icon" />
				<img src={Profile} alt="W" className="profile__icon" />
			</div>
		</div>
	);
};

export default Header;
