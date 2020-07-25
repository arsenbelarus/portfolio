import React from "react";
import style from "./Footer.module.css"

type FooterPropsType = {

}

const Footer = (props: FooterPropsType) => {

    return (
    <div className={style.footerContainer}>
        <div className={style.footerHeader}>
            Arsen Vaskanian
        </div>
        <div className={style.footerLinks}>
            <a href="http://www.facebook.com">Facebook</a>
            <a href="http://www.instagram,com">Instagram</a>
            <a href="http://www.linkedin.com">LinkedIn</a>
            <a href="http://www.vk.com">VK</a>
        </div>
        <div className={style.footerCopyright}>
                @2020 All rights reserved
        </div>
    </div>


    )

}


export default Footer