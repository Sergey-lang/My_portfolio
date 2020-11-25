import React from 'react'
import s from './Skill.module.css'

export const Skill = (props) => {
	return (
		<div className={s.skillItem}>
			<div className={s.skillBlock}>
				<div className={s.wrapper}>
					<div className={s.icon}></div>
					<h3>{props.title}</h3>
					<p>{props.discription}</p>
				</div>
			</div>
		</div>
	)
}
