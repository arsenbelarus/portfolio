import React from "react";
import style from "./Freelance.module.css"

type HeaderPropsType = {

}

const Freelance = (props: HeaderPropsType) => {

    return (
    <div className={style.freelanceContainer}>
        <div className={style.freelanceHeader}>
            <h2>
                I can work remotely
            </h2>
        </div>
        <div className={style.freelanceHireMe}>
               <h3>
                   Hire me
               </h3>
        </div>
    </div>


    )

}


export default Freelance