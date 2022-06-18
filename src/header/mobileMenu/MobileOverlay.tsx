import React from 'react';
import { Link } from 'react-scroll';
import { NavOptions } from '../../consts/navOptions';
import style from './MobileMenu.module.css';

type MobileOverlayProps = {
	options: NavOptions[];
	onBurgerClick(): void
};

const MobileOverlay = ({ options, onBurgerClick }: MobileOverlayProps) => {
	return (
		<div className={style.mobileOverlay}>
			{options.map((option) => (
				<Link
					key={option.to}
					to={option.to}
					offset={-50}
					delay={200}
					spy={true}
					smooth={true}
					onClick={onBurgerClick}
				>
					{option.label}
				</Link>
			))}
		</div>
	);
};

export default MobileOverlay;
