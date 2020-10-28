import React from 'react'
import s from './Skill.module.css'

export const Skill = React.memo((props) => {
	return (
		<div className={s.skillBlock}>
			<div className={s.icon}></div>
			<h3>{props.title}</h3>
			<span className={s.discription}>{props.discription}</span>
		</div>
	)
})