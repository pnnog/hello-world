import posts from 'json/posts.json'
import Posts from 'components/Posts'

import styles from './home.module.css'

export default function Home () {
  return <main className={styles.main}> <Posts posts = {posts} /></main>
}