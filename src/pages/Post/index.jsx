import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useParams } from "react-router-dom"

import posts from 'json/posts.json'

import styles from './post.module.css'
import NotFound from "pages/NotFound"
import Layout from "pages/Layout"
import PostDefault from "components/PostDefault"

export default function Post() {

  const getPost = (id) =>  posts.find(post => post.id===parseInt(id))

  const {id} = useParams()
  const post = getPost(id)


  if(!post){
    return <NotFound />
  }
 
  return (
    <Layout>
      <PostDefault 
        title={post.titulo} 
        coverImage={`/assets/posts/${post.id}/capa.png`}
      >
        <div className={styles.post_markdown_container}>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>
      </PostDefault>      
    </Layout>
  )
}
