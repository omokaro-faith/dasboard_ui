import React from 'react';
import PageFooter from '../../organisms/PageFooter/PageFooter';
import SubHeader from '../../organisms/SubHeader/SubHeader';
import InformationTab from '../../molecules/InformationTab/InformationTab';
import Table from '../../molecules/Table/Table';

import './style.css';

const Layout = () => {
	return (
		<div className="layout__wrapper">
			<SubHeader />
			<div className="page__content">
				<InformationTab />
				<Table />
			</div>
			<PageFooter />
		</div>
	);
};

export default Layout;
