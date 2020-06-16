/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './style.css';

const Pagination = () => {
	return (
		<div className="pagination">
			<a href="#" className="anchor">
				&lsaquo;
			</a>
			<a className="active anchor" href="#">
				1
			</a>
			<a href="#" className="anchor">
				2
			</a>
			<a href="#" className="anchor">
				....
			</a>
			<a href="#" className="anchor">
				15
			</a>
			<a href="#" className="anchor">
				&rsaquo;
			</a>
		</div>
	);
};

export default Pagination;
