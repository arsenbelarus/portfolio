import React from "react";
import style from "./NavBar.module.css"

type NavBarPropsType = {

}

const NavBar = (props: NavBarPropsType) => {

    return (

        <div className={style.navbar}>

            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Footer</a>

        </div>

    )

}


export default NavBar