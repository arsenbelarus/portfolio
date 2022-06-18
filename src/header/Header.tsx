import React, { useState } from 'react';
import { navOptions } from '../consts/navOptions';
import style from './Header.module.css';
import Logo from './logo/Logo';
import MobileMenu from './mobileMenu/MobileMenu';
import MobileOverlay from './mobileMenu/MobileOverlay';
import NavBar from './navBar/NavBar';

export const Header = () => {
	const [isMobileOpen, setOpen] = useState(false);
	const onBurgerClick = () => setOpen(!isMobileOpen);

	return (
		<div className={style.header}>
			<Logo />
			<NavBar options={navOptions} />
			<MobileMenu isMobileOpen={isMobileOpen} onBurgerClick={onBurgerClick} />
			{isMobileOpen && <MobileOverlay options={navOptions} />}
		</div>
	);
};
