import React from 'react'
import s from './Nav.module.css'

export const Nav = React.memo(() => {
	return (
		<div className={s.nav}>
			<a href="">Main</a>
			<a href="">Skils</a>
			<a href="">Projects</a>
			<a href="">Contacts</a>
		</div>
	)
})
