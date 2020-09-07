import React from "react";
import style from "./Portfolio.module.css"
import {SpecificPortfolio} from "./specificPortfolio/SpecificPortfolio";
import todo from "../assets/portfolio_images/todo.jpg"
import social from "../assets/portfolio_images/social.jpg"
import {BlockHeader} from "../common/blockHeader/BlockHeader";

type PortfolioPropsType = {}

const Portfolio = (props: PortfolioPropsType) => {

    const todoBackground = {backgroundImage: 'url(' + todo + ')'};
    const socialBackground = {backgroundImage: 'url(' + social + ')'};

    return (
        <div className={`${style.portfolioContainer} "portfolio"`}>
            <BlockHeader id={"portfolio"} title={"My portfolio"}/>
            <div className={style.portfolioContent}>
                <SpecificPortfolio style={todoBackground}
                                   link={"https://arsenbelarus.github.io/TodoList"}
                                   projectName={"ToDo List"}
                                   projectDescription={"Here you can observe all my skills in React/Redux. " +
                                   "This project includes Redux Thunk, Ui=>BLL=>DAL workflow, Hooks, Material UI usage. " +
                                   "Storybook and Unit Tests have also been used. Project is deployed on gh pages"}/>
                <SpecificPortfolio style={socialBackground}
                                   link={"https://arsenbelarus.github.io/social-network"}
                                   projectName={"Social Network"}
                                   projectDescription={`Social network is a project, where you can assess my skills to learn 
                                   something new. Every time I've learned new feature or technology I try to implement it here.
                                   So it's a kind of playground of my own. Deployed on gh pages`}/>
            </div>
        </div>

    )
}

export default Portfolio


