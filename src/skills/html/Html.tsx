import React from "react";
import style from "../SpecificSkill.module.css"
import html from "../../assets/logos/html.jpg"

type HtmlPropsType = {

}

const Html = (props: HtmlPropsType) => {

    return (
        <div className={style.skillContainer}>
            <div className={style.skillLogo}>
                <img src={html} alt="" />
            </div>
            <div className={style.skillHeader}>
                <p>HTML</p>
            </div>
            <div className={style.skillDescription}>
                kjkj jk lkfgj skfjg gkjflkgjk fgjfkg dfkg ldkfjg jgdkflgj dfkgj;dkf gkfdg ;kdfjg ;ldfkgdf sdfs
                df sdfdsfgdsfgdsf df dfg gdfg dfg dsgdfg dsfg dfgdfg fgdfgsdfg sgsdfgsdfgs
            </div>
        </div>

    )
}

export default Html