import styles from './postDefault.module.css' 

export default function PostDefault({children, title, coverImage}) {
  return (
    <article className={styles.postDefault}>
      <div 
        className={styles.cover}
        style={{backgroundImage: `url(${coverImage})`}}
        >
      </div>

      <h2 className={styles.title}> {title}</h2>
        
      <div className={styles.content}>
        {children}
      </div>
    </article>
  )
}
