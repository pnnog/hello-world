import MenuLink from 'components/MenuLink'
import styles from './menu.module.css'

export default function Menu() {

  return (
    <header className={styles.header}>
      <nav className={styles.menu_wrapper}>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
      </nav>
    </header>
   
  )
}
