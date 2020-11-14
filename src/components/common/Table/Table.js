import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import Section from './Section/Section';
import './table.less';

const Table = ({ columns, sections, sectionLabels }) => {
	return (
		<div className="table-container">
			<TableHeader columns={columns} />
			<div className="sections">
				{Object.keys(sections).map((sectionName) => (
					<Section key={sectionName} sectionName={sectionLabels[sectionName]} sectionRowsData={sections[sectionName]} />
				))}
			</div>
		</div>
	);
};

export default Table;
