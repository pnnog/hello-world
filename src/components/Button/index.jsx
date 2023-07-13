import styles from './button.module.css'
export default function Button({children, size, onClick}) {
  
  return (
    <button onClick={onClick} className={`${styles.button} ${!!size && styles[size]}`}>{children}</button>
  )
}
