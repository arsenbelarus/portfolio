import React from "react";
import style from "../SpecificPortfolio.module.css"

type propsType = {
    projectName: string,
    projectDescription: string
    style: {backgroundImage: string}
    link: string
}

export const SpecificPortfolio = (props: propsType) => {

    return (
        <div className={style.specificPortfolioContainer}>
            <div className={style.specificPortfolioImageContainer} style={props.style}>
                <div className={style.specificPortfolioImageContainerOverlay}>
                    <form action={props.link}>
                        <button type="submit">EXPLORE</button>
                    </form>
                </div>

            </div>
            <h3 className={style.specificPortfolioProjectHeader}>
                {props.projectName}
            </h3>
            <div className={style.specificPortfolioProjectDescription}>
                <header style={{fontSize: "1.2em", marginBottom: "10px"}}>
                    Project description:
                </header>
                <article>
                    {props.projectDescription}
                </article>
            </div>
        </div>
    )
};