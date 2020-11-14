import React from 'react';
import './header.less';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

function Header({ method, path, api }) {
	// This can be retrieved using routing properties for more robust architecture
	const BREADCRUMBS = [{ text: 'All APIs' }, { text: api }, { text: path }];
	return (
		<div className="header-container">
			<div className="request-details">
				<div className="request-method">{method.toUpperCase()}</div>
				<div className="request-path">{path}</div>
			</div>
			<Breadcrumbs items={BREADCRUMBS} />
			<div className="divider" />
		</div>
	);
}

export default Header;
