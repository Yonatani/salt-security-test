import React from 'react';
import Tab from './Tab';
import './tabs.less';

const Tabs = ({ tabs, onTabClick, currentSelectedTab }) => {
	const tabsList = tabs.map((tab, index) => (
		<Tab key={`${tab}_gallery_tab`} label={tab} tab={tab} onTabSelect={onTabClick} index={index} isSelected={currentSelectedTab === tab} />
	));

	return <div className="tabs">{tabsList}</div>;
};

export default Tabs;
