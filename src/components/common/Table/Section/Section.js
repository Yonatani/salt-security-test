import React, { useState } from 'react';
import { Collapse, Icon, Pre } from '@blueprintjs/core';
import TableRow from '../TableRow/TableRow';
import './section.less';

const renderEmptyData = () => {
	return <Pre>No Data</Pre>;
};

const Section = ({ sectionName, sectionRowsData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenSectionClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div key={sectionName} className="section-container">
			<div className="section">
				<Icon size="small" className={'section-arrow'} icon={isOpen ? 'caret-down' : 'caret-right'} />
				<div className="section-title" onClick={handleOpenSectionClick}>
					{sectionName}
				</div>
			</div>
			<div className="section-data">
				<Collapse isOpen={isOpen}>
					<div className="rows-container">
						{sectionRowsData.length > 0
							? sectionRowsData.map((rowData) => <TableRow key={rowData.name} isOpen={isOpen} rowData={rowData} />)
							: renderEmptyData()}
					</div>
				</Collapse>
			</div>
		</div>
	);
};

export default Section;
