import React from "react";
import style from "./Skills.module.css"
import SpecificSkill from "./specificSkill/SpecificSkill";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/js.png";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.png";
import {BlockHeader} from "../common/blockHeader/BlockHeader";

type SkillsPropsType = {}

const Skills = (props: SkillsPropsType) => {

    const htmlBackground = {backgroundImage: `url(${html})`}
    const cssBackground = {backgroundImage: `url(${css})`}
    const jsBackground = {backgroundImage: `url(${js})`}
    const reactBackground = {backgroundImage: `url(${react})`}
    const reduxBackground = {backgroundImage: `url(${redux})`}

    return (
        <div className={`${style.skillsContainer} "skills"`}>
            <BlockHeader id={"skills"} title={"My Skills"}/>
            <div className={style.skillsContent}>
                <SpecificSkill style={htmlBackground} skillName={"HTML"}
                               skillDescription={`Deep knowledge of HTML 5 structure and semantic tags. 
                               Correct usage of block names to create corresponding page layout. 
                               Familiarity with W3C standards`}/>
                <SpecificSkill style={cssBackground} skillName={"CSS/SASS"}
                               skillDescription={`Knowledge of all main CSS 3 features, including shadows, gradients, 
                               transitions or animations, as well as new layouts like multi-columns, flexible box or 
                               grid layouts. Deep understanding of flex-based design. Knowledge of SASS/SCSS prepros.`}/>
                <SpecificSkill style={jsBackground} skillName={"JavaScript"}
                               skillDescription={`Good knowledge of JavaScript + experience with TypeScript. Daily practicing
                               with codewars-like web-sites. Understanding of objects, function expression and function 
                               declaration, promises. Deep object and array copying. Familiar with ES6 syntax, arrow functions etc.`}/>
                <SpecificSkill style={reactBackground} skillName={"React"}
                               skillDescription={`Professional usage of React library. Class components, including life-cycles
                               and local state managing, HOCs, container components, MSTP & MDTP. Functional components and 
                               Hooks (useState, useEffect, useReducer, etc). State management using React-Redux library 
                               (useSelector and useDispatch). React + TypeScript deep understanding`}/>
                <SpecificSkill style={reduxBackground} skillName={"Redux"}
                               skillDescription={`FLUX workflow, state management, Middlewares, Redux Thunk knowledge, 
                               Actions and Action creators, reducers, createStore, dispatch, immutable state changing. 
                               Deep understanding of UI => BLL => DAL workflow`}/>
            </div>
        </div>

    )
}

export default Skills


