import React from 'react';
import style from './Main.module.css';
import { Button } from '../common/button/Button';
import FileSaver from 'file-saver';
import Avatar from '../assets/main_image_4.jpg';

const Main = () => {
	const saveFile = () => {
		FileSaver.saveAs(
			'https://arsenbelarus.github.io/portfolio/CV.pdf',
			'Arsen Vaskanian CV.pdf',
			{ autoBom: false }
		);
	};
	return (
		<div className={style.main}>
			<div className={style.greeting}>
				<h1>Hello world</h1>
				<p>
					My name is <strong>Arsen Vaskanian</strong> <br /> and I'm a Front-End
					developer
				</p>
				<Button
					name={'Download CV'}
					onClick={saveFile}
					onTouchEnd={saveFile}
					onTouchStart={saveFile}
				/>
			</div>
			<div className={style.imageContainer}>
				<img src={Avatar} alt='main_image' />
			</div>
		</div>
	);
};

export default Main;
