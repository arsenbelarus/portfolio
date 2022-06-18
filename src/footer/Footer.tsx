import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
	return (
		<div className={style.footerContainer}>
			<div className={style.footerCopyright}>@2020 all rights reserved</div>
		</div>
	);
};

export default Footer;
