import React from "react";
import style from "./Footer.module.css"

const Footer = () => {

  return (
    <div className={style.footerContainer}>
      <div className={style.footerLinks}>
        <a href="https://www.facebook.com/arsen.voskanyan.79">Facebook</a>
        <a href="https://www.instagram.com/arsenvaskanian/">Instagram</a>
        <a href="https://www.linkedin.com/in/arsen-vaskanian-291a9394">LinkedIn</a>
        <a href="https://vk.com/arsen_voskanyan">VK</a>
      </div>
      <div className={style.footerCopyright}>
        @2020 all rights reserved
      </div>
    </div>


  )

}


export default Footer