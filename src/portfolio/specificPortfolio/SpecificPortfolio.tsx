import React from 'react';
import style from './SpecificPortfolio.module.css';

type propsType = {
	projectName: string;
	projectDescription: string;
	link: string;
	img: string;
};

export const SpecificPortfolio = (props: propsType) => {
	return (
		<div className={style.specificPortfolioContainer}>
			<div className={style.specificPortfolioImageContainer}>
				<img src={props.img} alt={props.projectName} />
				<div className={style.specificPortfolioImageContainerOverlay}>
					<button className={style.btn}>
						<a href={props.link}>EXPLORE</a>
					</button>
				</div>
			</div>
			<h3 className={style.specificPortfolioProjectHeader}>
				{props.projectName}
			</h3>
			<div className={style.specificPortfolioProjectDescription}>
				<header style={{ fontSize: '1.2em', marginBottom: '10px' }}>
					Project description:
				</header>
				<article>{props.projectDescription}</article>
			</div>
		</div>
	);
};
