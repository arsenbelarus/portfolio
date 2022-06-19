import React from 'react';
import { SpecificSkillType } from '../../types/types';
import style from './SpecificSkill.module.css';

const SpecificSkill = (props: SpecificSkillType) => {
	return (
		<div className={style.skillContainer}>
			<div className={style.skillLogo}>
				<img src={props.img} alt={props.skillName} />
			</div>
			<div className={style.skillDescription}>{props.skillDescription}</div>
		</div>
	);
};

export default SpecificSkill;
