import React from "react";
import style from "./NavBar.module.css"
import {Link} from "react-scroll";

type NavBarPropsType = {

}

const NavBar = (props: NavBarPropsType) => {

    return (

        <div className={style.navbar}>
          <a href="">Main</a>
          <Link
            to="skills"
            offset={-50}
            delay={200}
            spy={true}
            smooth={true}>
            <a href="">Skills</a>
          </Link>

          <Link
            to="portfolio"
            offset={-50}
            delay={200}
            spy={true}
            smooth={true}>
            <a href="">Portfolio</a>
          </Link>

          <Link
            to="contacts"
            offset={-50}
            delay={200}
            spy={true}
            smooth={true}>
            <a href="">Contacts</a>
          </Link>

        </div>

    )

}


export default NavBar