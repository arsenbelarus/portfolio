import React from "react";
import style from "./Skills.module.css"
import Html from "./html/Html";
import Css from "./css/Css";
import JavaScript from "./javaScrpit/JavaScript";

type SkillsPropsType = {

}

const Skills = (props: SkillsPropsType) => {

    return (
        <div className={style.skillsContainer}>
            <div className={style.skillsHeader}>
                    <h1>My Skills</h1>
            </div>
            <div className={style.skillsContent}>
                    <Html/>
                    <Css/>
                    <JavaScript/>
            </div>
        </div>

    )
}

export default Skills


