import React, { useEffect, useState } from 'react';
import data from './fe_data.json';
import Header from './components/Header/Header';
import Table from './components/common/Table/Table';
import Checked from './components/common/Checked/Checked';
import Label from './components/common/Label/Label';
import SearchBar from './components/common/SearchBar/SearchBar';
import './app.less';
import Tabs from './components/Tabs/Tabs';

const tabs = ['Request', 'Response'];

const sectionLabels = {
	urlParams: 'URL Parameters',
	queryParams: 'Query Parameters',
	headers: 'Headers',
	body: 'Body',
};

const columnsScheme = [
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'pii',
		label: 'PII',
		component: <Checked label="PII" color="blue" />,
	},
	{
		key: 'masking',
		label: 'MASKING',
		component: <Checked label="MASKED" color="purple" />,
	},
	{
		key: 'type',
		label: 'TYPE',
		component: <Label color="green" />,
	},
];

const defaultFilters = { query: '', pii: false };

const getFilteredData = (sections, filters) => {
	let filteredSection = {};
	Object.keys(sections).forEach((sectionKey) => {
		filteredSection[sectionKey] = sections[sectionKey].filter((rowData) => {
			if (filters.pii && !rowData.pii) return false;
			return rowData.name.includes(filters.query);
		});
	});
	return filteredSection;
};

function App() {
	const [currentTab, setCurrentTab] = useState(tabs[0]);
	const [filters, setFilters] = useState(defaultFilters);

	const sections = data[currentTab.toLowerCase()];
	const [filteredData, setFilteredData] = useState(sections);

	useEffect(() => {
		setFilteredData(getFilteredData(sections, filters));
	}, [currentTab]);

	const handleApplyFilters = () => {
		setFilteredData(getFilteredData(sections, filters));
	};

	const handleResetFilters = () => {
		setFilters(defaultFilters);
		setFilteredData(getFilteredData(sections, defaultFilters));
	};

	const handleQueryChange = (value) => {
		setFilters({ ...filters, query: value });
	};

	const handlePIIFilterChange = () => {
		setFilters({ ...filters, pii: !filters.pii });
	};

	return (
		<div className="app-container">
			<Header method={data.method} path={data.path} api={data.api} />
			<Tabs tabs={tabs} onTabClick={setCurrentTab} currentSelectedTab={currentTab} />
			<div className="content">
				<SearchBar
					query={filters.query}
					onSearchInputChange={handleQueryChange}
					isPIIFilter={filters.pii}
					onPIIFilterChange={handlePIIFilterChange}
					onApply={handleApplyFilters}
					onResetFilters={handleResetFilters}
				/>
				{<Table columns={columnsScheme.map((col) => col.key)} sections={filteredData} sectionLabels={sectionLabels} />}
			</div>
		</div>
	);
}

export { App as default, columnsScheme };
