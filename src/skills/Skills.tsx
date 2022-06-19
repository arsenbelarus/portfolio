import React from 'react';
import style from './Skills.module.css';
import SpecificSkill from './specificSkill/SpecificSkill';

import { BlockHeader } from '../common/blockHeader/BlockHeader';
import { SpecificSkillPortfolioType } from '../types/types';

type SkillsPropsType = {
	skills: SpecificSkillPortfolioType[];
};

const Skills = ({ skills }: SkillsPropsType) => {
	return (
		<div>
			<BlockHeader id={'skills'} title={'My Skills'} />
			<div className={style.skillsContent}>
				{skills.map((skill) => (
					<SpecificSkill
						name={skill.name}
						img={skill.img}
						description={skill.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
