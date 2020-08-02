import React from "react";
import style from "./NavBar.module.css"

type NavBarPropsType = {

}

const NavBar = (props: NavBarPropsType) => {

    return (

        <div className={style.navbar}>

            <a href="">Main</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contacts">Contacts</a>

        </div>

    )

}


export default NavBar