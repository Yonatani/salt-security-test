import React from 'react';
import { columnsScheme } from '../../../../App';
import { Pre } from '@blueprintjs/core';
import './table-row.less';

const TableRow = ({ rowData }) => {
	return (
		<Pre className="row">
			{Object.keys(rowData).map((colKeyData, colIndex) => {
				// Can be a more robust async handler / can be a hoc on the column scheme
				const handleChange = (value) => {
					rowData[colKeyData] = value;
				};
				return (
					<div key={`row-${columnsScheme[colIndex].key}`} className="row-content column">
						{columnsScheme[colIndex].component
							? React.cloneElement(columnsScheme[colIndex].component, { value: rowData[colKeyData], onChange: handleChange })
							: rowData[colKeyData]}
					</div>
				);
			})}
		</Pre>
	);
};

export default TableRow;
