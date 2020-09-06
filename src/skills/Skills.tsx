import React from "react";
import style from "./Skills.module.css"
import SpecificSkill from "./specificSkill/SpecificSkill";
import html from "../assets/logos/html.jpg";
import css from "../assets/logos/css.jpg";
import js from "../assets/logos/js.jpg";
import {BlockHeader} from "../common/blockHeader/BlockHeader";

type SkillsPropsType = {}

const Skills = (props: SkillsPropsType) => {

    const htmlBackground = {background: `url(${html})`}
    const cssBackground = {background: `url(${css})`}
    const jsBackground = {background: `url(${js})`}

    return (
        <div className={style.skillsContainer}>
            <BlockHeader id={"skills"} title={"My Skills"}/>
            <div className={style.skillsContent}>
                <SpecificSkill style={htmlBackground} skillName={"HTML"} skillDescription={"Bla Bla"}/>
                <SpecificSkill style={cssBackground} skillName={"CSS"} skillDescription={"Bla Bla"}/>
                <SpecificSkill style={jsBackground} skillName={"JavaScript"} skillDescription={"Bla Bla"}/>
            </div>
        </div>

    )
}

export default Skills


