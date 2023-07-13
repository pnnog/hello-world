import { Link } from 'react-router-dom'
import styles from './post.module.css'
import Button from 'components/Button'

export default function PostCard({post}) {
  
  return (
    <Link className={styles.link} to={`/post/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.image}
          src={`/assets/posts/${post.id}/capa.png`} 
          alt={post.title}
        /> 

        <div className={styles.content}> 
          <h1 className={styles.title}>{post.titulo}</h1>
          <Button> Ler </Button>
        </div>
      </div>
    </Link>

  )
}
