import React from "react";
import style from "../SpecificSkill.module.css"

type HtmlPropsType = {

}

const Html = (props: HtmlPropsType) => {

    return (
        <div className={style.skillContainer}>
            <div className={style.skillLogo}>

            </div>
            <div className={style.skillHeader}>
                HTML
            </div>
            <div className={style.skillDescription}>
                description
            </div>
        </div>

    )
}

export default Html