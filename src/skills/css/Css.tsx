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
                <p>CSS</p>
            </div>
            <div className={style.skillDescription}>
                kjkj jk lkfgj skfjg gkjflkgjk fgjfkg dfkg ldkfjg jgdkflgj dfkgj;dkf gkfdg ;kdfjg ;ldfkgdf sdfs
                df sdfdsfgdsfgdsf df dfg gdfg dfg dsgdfg dsfg dfgdfg fgdfgsdfg sgsdfgsdfgs
            </div>
        </div>
    )
}

export default Css