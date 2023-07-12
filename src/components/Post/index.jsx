import styles from './post.module.css'

export default function Post({post}) {
  console.log(post)
  
  return (
    <div className={styles.post}>
      <img
        className={styles.image}
        src={`/assets/posts/${post.id}/capa.png`} 
        alt={post.title}
      /> 

      <div className={styles.content}> 
        <h1 className={styles.title}>{post.titulo}</h1>
        <button className={styles.button}>Ler</button>
      </div>
    </div>
  )
}
