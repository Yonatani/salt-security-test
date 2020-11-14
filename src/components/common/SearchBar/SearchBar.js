import React from 'react';
import { Button, Checkbox, Icon } from '@blueprintjs/core';
import './search-bar.less';

const SearchBar = ({ query, isPIIFilter, onSearchInputChange, onPIIFilterChange, onResetFilters, onApply }) => {
	const handleOnInputChange = (event) => {
		onSearchInputChange && onSearchInputChange(event.target.value);
	};

	const handleOnCheckboxChange = () => {
		onPIIFilterChange && onPIIFilterChange();
	};

	return (
		<div className="filters-container">
			<div className="bar">
				<div className="search-bar-container">
					<Icon icon="search" className="search-icon" />
					<input className="search-input" placeholder="Search" value={query} onChange={handleOnInputChange} />
					<div className="divider" />
					<Checkbox className="checkbox-container" checked={isPIIFilter} label="Show PII only" onChange={handleOnCheckboxChange} />
				</div>
				<Button text="Apply" className="apply-button" onClick={onApply} />
			</div>
			<div className="reset-filters" onClick={onResetFilters}>
				Reset Filters
			</div>
		</div>
	);
};
export default SearchBar;
