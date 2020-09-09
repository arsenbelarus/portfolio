import React from "react";
import style from "./SpecificSkill.module.css"

type HtmlPropsType = {
    style: {backgroundImage: string}
    skillName: string
    skillDescription: string
}

const SpecificSkill = (props: HtmlPropsType) => {



    return (
        <div className={style.skillContainer}>
            <div className={style.skillLogo} style={props.style}>

            </div>
{/*            <div className={style.skillHeader}>
                <p>{props.skillName}</p>
            </div>*/}
            <div className={style.skillDescription}>
                {props.skillDescription}
            </div>
        </div>

    )
}

export default SpecificSkill