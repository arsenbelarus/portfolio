import React, {ButtonHTMLAttributes, FC} from "react";
import style from "./Button.module.css"

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string,
}

export const Button: FC<ButtonPropsType> = ({name, ...rest}) => {
  return <button className={style.btn}>{name}</button>;
}