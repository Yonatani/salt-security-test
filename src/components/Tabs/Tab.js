import React from 'react';
import './tabs.less';

const Tab = ({ label, tab, onTabSelect, isSelected = false, index }) => {
	const handleTabClick = (event) => {
		event.stopPropagation();
		onTabSelect(tab, index);
	};

	return (
		<div className={`tab tab-${label.toLowerCase().replace(' ', '-')} ${isSelected ? 'selected' : ''}`} onClick={handleTabClick}>
			<span className="tab-label" data-test-id={label}>
				{label}
			</span>
		</div>
	);
};

export default Tab;
