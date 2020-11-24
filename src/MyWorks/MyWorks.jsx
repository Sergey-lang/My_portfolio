import React from 'react'
import s from './MyWorks.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Work } from './Work/Work'
import { Title } from '../common/styles/components/Title/Title'
import one from '../common/assets/images/dp-big-portfolio-01.jpg';
import two from '../common/assets/images/dp-big-portfolio-03.jpg';
import three from '../common/assets/images/dp-big-portfolio-04.jpg';
import four from '../common/assets/images/dp-big-portfolio-01.jpg';

export const MyWorks = React.memo(() => {

	const oneWork = {
		backgroundImage: `url(${one})`,
	}

	const threeWork = {
		backgroundImage: `url(${two})`,
	}

	const fourWork = {
		backgroundImage: `url("${three}")`,
	}

	const fiveWork = {
		backgroundImage: `url("${four}")`,
	}

	return (
		<div className={s.worksBlock}>
			<div className={`${sContainer.container} ${s.worksContainer}`}>
				<Title title={'My works'}
						 titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
				/>
				<div className={s.works}>
					<Work style={oneWork}
						projectName={'First Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
						}
					/>
					<Work style={threeWork}
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
						}
					/>
					<Work style={fourWork}
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus.'
						}
					/>
					<Work style={fiveWork}
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus.'
						}
					/>
				</div>
			</div>
		</div>
	)
})
