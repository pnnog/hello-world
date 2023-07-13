import PostCard from 'components/PostCard'
import styles from './posts.module.css'

export default function Posts({posts}) {
  return (
    <ul className={styles.posts}>
      {posts.map(post=> <li key={post.id}> <PostCard post = {post} /></li>)}
    </ul>
)
}
