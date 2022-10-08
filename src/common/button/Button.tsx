import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './Button.module.css';
import {Loader} from "../loader/Loader";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    disabled?: boolean;
    isLoading?: boolean;
}

export const Button: FC<ButtonPropsType> = ({
                                                name,
                                                onClick,
                                                disabled,
                                                isLoading,
                                                ...rest
                                            }) => {
    return (
        isLoading ? <Loader/> : <button
            className={`${style.btn} ${disabled ? style.disabled : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};
