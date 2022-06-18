import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.css';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	name: string;
}

export const Button: FC<ButtonPropsType> = ({ name, onClick, ...rest }) => {
	return (
		<button className={style.btn} onClick={onClick}>
			{name}
		</button>
	);
};
