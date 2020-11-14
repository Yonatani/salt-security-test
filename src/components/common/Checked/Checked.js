import React, { useEffect, useState } from 'react';
import './checked.less';

const Checked = ({ label, value, onChange, color = 'purple' }) => {
	const [isChecked, toggleIsChecked] = useState(value);

	useEffect(() => {
		toggleIsChecked(value);
	}, [value]);

	const handleOnChange = () => {
		onChange && onChange(!value);
		toggleIsChecked(!isChecked); // can also be achieved with useEffect after the data is updated
	};

	return (
		<div className={`checked-container ${isChecked ? 'is-checked' : ''} ${color}`} onClick={handleOnChange}>
			{label}
		</div>
	);
};
export default Checked;
