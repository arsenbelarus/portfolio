import React from "react";
import style from "../SpecificSkill.module.css"

type CssPropsType = {

}

const Css = (props: CssPropsType) => {

    return (
        <div className={style.skillContainer}>
            <div className={style.skillLogo}>

            </div>
            <div className={style.skillHeader}>
                CSS
            </div>
            <div className={style.skillDescription}>
                description
            </div>
        </div>
    )
}

export default Css