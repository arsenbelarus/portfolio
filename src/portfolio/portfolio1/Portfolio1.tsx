import React from "react";
import style from "../SpecificPortfolio.module.css"

type CssPropsType = {

}

const Portfolio1 = (props: CssPropsType) => {

    return (
        <div className={style.specificPortfolioContainer}>
            <div className={style.specificPortfolioImageContainer}>
                <button>Explore</button>
            </div>
            <div className={style.specificPortfolioProjectHeader}>
                Project name
            </div>
            <div className={style.specificPortfolioProjectDescription}>
                <p>
                    Project description:
                </p>
                <p>
                    kjkj jk lkfgj skfjg gkjflkgjk fgjfkg dfkg ldkfjg jgdkflgj dfkgj;dkf gkfdg ;kdfjg ;ldfkgdf sdfs
                    df sdfdsfgdsfgdsf df dfg gdfg dfg dsgdfg dsfg dfgdfg fgdfgsdfg sgsdfgsdfgs
                </p>
            </div>
        </div>
    )
}

export default Portfolio1