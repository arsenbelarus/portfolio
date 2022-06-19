import React, { ChangeEvent, useState } from 'react';
import style from './Contacts.module.css';
import { BlockHeader } from '../common/blockHeader/BlockHeader';
import { Button } from '../common/button/Button';

const Contacts = () => {
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const isButtonEnabled =
		inputValues.name.trim() && inputValues.email && inputValues.message;

	const changeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) =>
		setInputValues({
			...inputValues,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	return (
		<>
			<BlockHeader id={'contacts'} title={'Contacts'} />
			<div className={style.contactsContainer}>
				<form
					action='https://formsubmit.co/759bb574a14f19dfb48296653e6c1c40'
					method='POST'
					className={style.contactsForm}
				>
					<input
						type='text'
						placeholder={'Name'}
						name='name'
						value={inputValues.name}
						onChange={changeHandler}
					/>
					<input
						type='email'
						placeholder={'E-mail'}
						name='email'
						value={inputValues.email}
						onChange={changeHandler}
					/>
					<input
						type='tel'
						placeholder={'Phone (optional)'}
						name='phone'
						value={inputValues.phone}
						onChange={changeHandler}
					/>
					<textarea
						name='message'
						placeholder={'Your message'}
						rows={5}
						value={inputValues.message}
						onChange={changeHandler}
					/>
					<Button name='SUBMIT' disabled={!isButtonEnabled} />
				</form>
			</div>
		</>
	);
};

export default Contacts;
