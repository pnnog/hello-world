import { NavLink } from "react-router-dom"

import styles from './menuLink.module.css'

export default function MenuLink ({to, children}) {

  return <NavLink
    className={({isActive})=>`
      ${styles.link}
      ${isActive? styles.active:''}
    `}
    to={to}
    end> {children} </NavLink>
}