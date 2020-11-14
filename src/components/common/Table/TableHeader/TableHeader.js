import React from 'react';
import './table-header.less';

const TableHeader = ({ columns }) => {
	return (
		<div className="table-header-container">
			{columns.map((colName) => {
				return (
					<div key={colName} className="column">
						{colName.toUpperCase()}
					</div>
				);
			})}
		</div>
	);
};

export default TableHeader;
