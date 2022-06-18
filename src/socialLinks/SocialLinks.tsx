import React from 'react';
import style from './SocialLinks.module.css';

const SocialLinks = () => {
	return (
		<div className={style.socialLinksContainer}>
			<a
				className={style.socialLink}
				href='https://www.facebook.com/arsen.voskanyan.79'
			>
				Facebook
			</a>
			<a
				className={style.socialLink}
				href='https://www.instagram.com/arsenvaskanian/'
			>
				Instagram
			</a>
			<a
				className={style.socialLink}
				href='https://www.linkedin.com/in/arsen-vaskanian'
			>
				LinkedIn
			</a>
			<a className={style.socialLink} href='https://vk.com/arsen_voskanyan'>
				VK
			</a>
		</div>
	);
};

export default SocialLinks;
