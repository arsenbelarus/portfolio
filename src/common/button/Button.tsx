import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.css';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	name: string;
	disabled?: boolean;
}

export const Button: FC<ButtonPropsType> = ({
	name,
	onClick,
	disabled,
	...rest
}) => {
	return (
		<button
			className={`${style.btn} ${disabled ? style.disabled : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{name}
		</button>
	);
};
