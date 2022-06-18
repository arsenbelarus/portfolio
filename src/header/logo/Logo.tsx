import React from 'react';
import { FaReact } from 'react-icons/fa';
import style from './Logo.module.css';

const Logo = () => {
	return (
		<div className={style.logo}>
			<FaReact size={60} className={[style.logo, style.rotating].join(' ')} />
		</div>
	);
};

export default Logo;
