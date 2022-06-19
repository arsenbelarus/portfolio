import React from 'react';
import style from './Portfolio.module.css';
import { SpecificPortfolio } from './specificPortfolio/SpecificPortfolio';

import { BlockHeader } from '../common/blockHeader/BlockHeader';
import { SpecificSkillPortfolioType } from '../types/types';

type PortfolioPropsType = {
	portfolios: SpecificSkillPortfolioType[];
};

const Portfolio = ({ portfolios }: PortfolioPropsType) => {
	return (
		<div>
			<BlockHeader id={'portfolio'} title={'My portfolio'} />
			<div className={style.portfolioContent}>
				{portfolios.map((portfolio) => (
					<SpecificPortfolio
						link={portfolio.link!}
						projectName={portfolio.name}
						projectDescription={portfolio.description}
						img={portfolio.img}
						key={portfolio.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
