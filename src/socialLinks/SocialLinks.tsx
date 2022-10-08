import React from 'react';
import { socialLinks } from '../consts/links';
import style from './SocialLinks.module.css';

const SocialLinks = () => {
	return (
		<div className={style.socialLinksContainer}>
			{socialLinks.map((socialLink) => (
				<a
					className={[style.socialLink, style.facebook].join(' ')}
					href={socialLink.link}
				>
					{<socialLink.icon size={26} />}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
