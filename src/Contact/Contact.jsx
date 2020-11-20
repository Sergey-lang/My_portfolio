import React from 'react'
import s from './Contact.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Button } from '../common/styles/components/Button/Button'
import { Title } from '../common/styles/components/Title/Title'

export const Contact = React.memo(() => {
	return (
		<div className={s.contactBlock}>
			<div className={`${sContainer.container} ${s.contactContainer}`}>
				<Title title={'Contact'} />
				<form className={s.contactForm}>
					<label for="fname">First name:</label>
					<br />
					<input type="text" id="fname" name="fname" />
					<br />
					<label for="lname">Last name:</label>
					<br />
					<input type="text" id="lname" name="lname" />
					<br />
					<label for="larea">Your message:</label>
					<br />
					<textarea type="text" id="larea" name="larea" />
				</form>
				<Button name={'Send'} />
			</div>
		</div>
	)
})