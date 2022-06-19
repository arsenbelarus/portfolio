import { SpecificSkillPortfolioType } from '../types/types';
import todo from '../assets/portfolio_images/todo.jpg';
import social from '../assets/portfolio_images/social.jpg';
import covid from '../assets/portfolio_images/covid.jpg';

export const portfolios: SpecificSkillPortfolioType[] = [
	{
		img: todo,
		name: 'ToDo List',
		description:
			'Here you can observe all my skills in React/Redux. This project includes Redux Thunk, Ui=>BLL=>DAL workflow, Hooks, Material UI usage. Storybook and Unit Tests have also been used. Project is deployed on gh pages',
		link: 'https://arsenbelarus.github.io/TodoList',
	},
	{
		img: covid,
		name: 'COVID-19 Tracker',
		description:
			'Simple yet powerful coronavirus tracker. Tracks new cases, recovered and deaths. You can choose cases by country or worldwide. React-leaflet and React-ChartJs-2 libraries were implemented. Just dive in and check.',
		link: 'https://corona-tracker-f4271.web.app',
	},
	{
		img: social,
		name: 'Social Network',
		description:
			'Social network is a project, where you can assess my skills to learn something new. Every time Ive learned new feature or technology I try to implement it here. So its a kind of playground of my own. Deployed on gh pages',
		link: 'https://arsenbelarus.github.io/social-network',
	},
];
