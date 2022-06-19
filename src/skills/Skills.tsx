import React from 'react';
import style from './Skills.module.css';
import SpecificSkill from './specificSkill/SpecificSkill';

import { BlockHeader } from '../common/blockHeader/BlockHeader';
import { SpecificSkillType } from '../types/types';

type SkillsPropsType = {
	skills: SpecificSkillType[];
};

const Skills = ({ skills }: SkillsPropsType) => {
	return (
		<div>
			<BlockHeader id={'skills'} title={'My Skills'} />
			<div className={style.skillsContent}>
				{skills.map((skill) => (
					<SpecificSkill
						skillName={skill.skillName}
						img={skill.img}
						skillDescription={skill.skillDescription}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
