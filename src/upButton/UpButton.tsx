import React from "react";
import styles from "./UpButton.module.css"
import {Link} from "react-scroll"

export const UpButton = () => {
  return (
    <Link
      to="main"
      offset={0}
      delay={200}
      spy={true}
      smooth={true}>

      <button className={styles.upButton}/>

    </Link>
  )
}