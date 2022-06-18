import React from 'react';
import style from './MobileMenu.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

type MobileMenuProps = {
	onBurgerClick(): void;
	isMobileOpen: boolean;
};

const MobileMenu = ({ onBurgerClick, isMobileOpen }: MobileMenuProps) => {
	return (
		<div className={style.mobileMenu}>
			{isMobileOpen ? (
				<AiOutlineClose
					size={30}
					onClick={onBurgerClick}
					className={style.burger}
				/>
			) : (
				<AiOutlineMenu
					size={30}
					onClick={onBurgerClick}
					className={style.burger}
				/>
			)}
		</div>
	);
};

export default MobileMenu;
