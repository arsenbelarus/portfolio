import React from "react";
import style from "./Header.module.css"
import NavBar from "./navBar/NavBar";

type HeaderPropsType = {

}

const Header = (props: HeaderPropsType) => {

    return (
    <div className={style.headerContainer}>
        <div className={style.header}>

            <NavBar/>

        </div>
    </div>


    )

}


export default Header