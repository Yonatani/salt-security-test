import React from 'react';
import './label.less';

const Label = ({ value, color }) => {
	return <div className={`label ${color}`}>{value.toUpperCase()}</div>;
};
export default Label;
