import React from 'react';
import TransparentButton from '../../atoms/Buttons/TransparentButton';

import './style.css';

const SubHeader = ({ pageName = 'ORDERS' }) => {
	return (
		<div className="subheader_container">
			<TransparentButton />
			<div className="mid__section">
				<p className="page__name">{pageName}</p>
				<p className="page__title">Completed Orders</p>
			</div>
		</div>
	);
};

export default SubHeader;
