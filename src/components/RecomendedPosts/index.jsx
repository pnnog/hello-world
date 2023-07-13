import Posts from 'components/Posts'
import React from 'react'

import styles from './recomendedPosts.module.css'

export default function RecomendedPosts({currentPost, posts}) {
  const recomendedPosts =  posts.filter(post => post.id !== currentPost)
  recomendedPosts.splice(4)

  return (

    <div className={styles.recommended}>
      <h3>Outros posts que você pode se interessar</h3>
      <Posts posts={recomendedPosts}/>
    </div>
  )
}
