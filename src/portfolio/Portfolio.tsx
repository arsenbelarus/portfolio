import React from "react";
import style from "./Portfolio.module.css"
import Portfolio1 from "./portfolio1/Portfolio1";
import Portfolio2 from "./portfolio2/Portfolio2";

type PortfolioPropsType = {}

const Portfolio = (props: PortfolioPropsType) => {

    return (
        <div className={style.portfolioContainer}>
            <div className={style.portfolioHeader}>
                <h1><a id="portfolio"/>My Portfolio</h1>
            </div>
            <div className={style.portfolioContent}>
                <Portfolio1/>
                <Portfolio2/>
            </div>
        </div>

    )
}

export default Portfolio


