import React from 'react';
import style from './UpButton.module.css';
import { Link } from 'react-scroll';
import { HiOutlineArrowCircleUp } from 'react-icons/hi';

export const UpButton = () => {
	return (
		<Link to='main' offset={0} delay={200} spy={true} smooth={true}>
			<HiOutlineArrowCircleUp className={style.upButton} />
		</Link>
	);
};
