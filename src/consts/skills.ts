import { SpecificSkillPortfolioType } from '../types/types';
import html from '../assets/logos/html.png';
import css from '../assets/logos/css.png';
import js from '../assets/logos/js.png';
import react from '../assets/logos/react.png';
import redux from '../assets/logos/redux.png';

export const skills: SpecificSkillPortfolioType[] = [
	{
		name: 'HTML',
		description:
			'Deep knowledge of HTML 5 structure and semantic tags. Correct usage of block names to create corresponding page layout. Familiarity with W3C standards',
		img: html,
	},
	{
		name: 'CSS/SASS',
		description:
			'Knowledge of all main CSS 3 features, including shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts. Deep understanding of flex-based design. Knowledge of SASS/SCSS prepros.',
		img: css,
	},
	{
		name: 'JavaScript',
		description:
			'Good knowledge of JavaScript + experience with TypeScript. Daily practicing with codewars-like web-sites. Understanding of objects, function expression and function declaration, promises. Deep object and array copying. Familiar with ES6 syntax, arrow functions etc.',
		img: js,
	},
	{
		name: 'React',
		description:
			'Professional usage of React library. Class components, including life-cycles and local state managing, HOCs, container components, MSTP & MDTP. Functional components and Hooks (useState, useEffect, useReducer, etc). State management using React-Redux library (useSelector and useDispatch). React + TypeScript deep understanding',
		img: react,
	},
	{
		name: 'Redux',
		description:
			'FLUX workflow, state management, Middlewares, Redux Thunk knowledge, Actions and Action creators, reducers, createStore, dispatch, immutable state changing. Deep understanding of UI => BLL => DAL workflow',
		img: redux,
	},
];
