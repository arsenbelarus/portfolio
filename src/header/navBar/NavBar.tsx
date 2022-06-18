import React from 'react';
import style from './NavBar.module.css';
import { Link } from 'react-scroll';
import { NavOptions } from '../../consts/navOptions';

type NavBarPropsType = {
	options: NavOptions[];
};

const NavBar = ({ options }: NavBarPropsType) => {
	return (
		<div className={style.navbar}>
			{options.map((option) => (
				<Link key={option.to} to={option.to} offset={-50} delay={200} spy={true} smooth={true}>
					{option.label}
				</Link>
			))}
		</div>
	);
};

export default NavBar;
