import React from 'react';

import './style.css';

const InformationTab = () => {
	return (
		<div className="informationtab__container">
			<div className="first__content">
				<p>Order Number</p>
				<p>SB843783833493</p>
			</div>
			<div className="second__content">
				<p>Pick Up Location</p>
				<p>6513 Dogwood Ave undefined Syracuse, </p>
				<p>Alaska 62927 United States</p>
			</div>
			<div className="third__content">
				<p>Delivery Location</p>
				<p>6513 Dogwood Ave undefined Syracuse, </p>
				<p>Alaska 62927 United States</p>
			</div>
		</div>
	);
};

export default InformationTab;
