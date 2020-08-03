import React from "react";
import style from "../SpecificSkill.module.css"
import js from "../../assets/logos/js.jpg"

type JavaScriptPropsType = {

}

const JavaScript = (props: JavaScriptPropsType) => {

    return (
        <div className={style.skillContainer}>
            <div className={style.skillLogo}>
                <img src={js} alt=""/>
            </div>
            <div className={style.skillHeader}>
                <p>JavaScript</p>
            </div>
            <div className={style.skillDescription}>
                kjkj jk lkfgj skfjg gkjflkgjk fgjfkg dfkg ldkfjg jgdkflgj dfkgj;dkf gkfdg ;kdfjg ;ldfkgdf sdfs
                df sdfdsfgdsfgdsf df dfg gdfg dfg dsgdfg dsfg dfgdfg fgdfgsdfg sgsdfgsdfgs
            </div>
        </div>
    )
}

export default JavaScript