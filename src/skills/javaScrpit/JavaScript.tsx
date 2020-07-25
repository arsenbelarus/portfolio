import React from "react";
import style from "../SpecificSkill.module.css"

type JavaScriptPropsType = {

}

const JavaScript = (props: JavaScriptPropsType) => {

    return (
        <div className={style.skillContainer}>
            <div className={style.skillLogo}>

            </div>
            <div className={style.skillHeader}>
                JavaScript
            </div>
            <div className={style.skillDescription}>
                description
            </div>
        </div>
    )
}

export default JavaScript