import React from 'react'
import {Button} from '../../../u0-common/u0.2-components/Button/Button'

import s from './Work.module.scss'

export const Work = ({projectName, description, ...props}) => {

   return (
       <div className={s.workItem}>
          <div className={s.workBlock}>
             <div className={s.projectImg} style={props.style}>
                <Button className={s.projectBtn} name={'Watch'}/>
             </div>
             <div className={s.description}>
                <h3>{projectName}</h3>
                <p>{description}</p>
             </div>
          </div>
       </div>
   )
}
