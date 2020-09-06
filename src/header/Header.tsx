import React from "react";
import style from "./Header.module.css"
import NavBar from "./navBar/NavBar";


export const Header = () =>
    (
        <div className={style.headerContainer}>
            <div className={style.header}>
                <NavBar/>
            </div>
        </div>
    )