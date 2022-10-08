import { IconType } from "react-icons";

export type NavOptions = {
	label: string;
	to: string;
};

export type SpecificSkillPortfolioType = {
	img: string;
	link?: string;
	name: string;
	description: string;
};

export type SocialLink = {
	link: string;
	icon: IconType;
}
