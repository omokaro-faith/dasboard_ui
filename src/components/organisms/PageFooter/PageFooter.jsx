import React from 'react';
import TextButton from '../../atoms/Buttons/TextButton';
import Pagination from '../../atoms/Pagination/Pagination';

import './style.css';

const PageFooter = () => {
	return (
		<div className="pagefooter_container">
			<TextButton />
			<Pagination />
		</div>
	);
};

export default PageFooter;
