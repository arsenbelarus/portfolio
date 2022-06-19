import React from 'react';
import { SpecificSkillPortfolioType } from '../../types/types';
import style from './SpecificSkill.module.css';

const SpecificSkill = (props: SpecificSkillPortfolioType) => {
	return (
		<div className={style.skillContainer}>
			<div className={style.skillLogo}>
				<img src={props.img} alt={props.name} />
			</div>
			<div className={style.description}>{props.description}</div>
		</div>
	);
};

export default SpecificSkill;
