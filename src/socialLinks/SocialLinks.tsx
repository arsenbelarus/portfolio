import React from 'react';
import style from './SocialLinks.module.css';
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineGithub,
} from 'react-icons/ai';

const SocialLinks = () => {
	return (
		<div className={style.socialLinksContainer}>
				<a
					className={[style.socialLink, style.facebook].join(' ')}
					href='https://www.facebook.com/arsen.voskanyan.79'
				>
					<AiOutlineFacebook size={26} />
				</a>
			<a
				className={[style.socialLink, style.instagram].join(' ')}
				href='https://www.instagram.com/arsenvaskanian/'
			>
				<AiOutlineInstagram size={26} />
			</a>
			<a
				className={[style.socialLink, style.linkedin].join(' ')}
				href='https://www.linkedin.com/in/arsen-vaskanian'
			>
				<AiOutlineLinkedin size={26} />
			</a>
			<a
				className={[style.socialLink, style.github].join(' ')}
				href='https://vk.com/arsen_voskanyan'
			>
				<AiOutlineGithub size={26} />
			</a>
		</div>
	);
};

export default SocialLinks;
