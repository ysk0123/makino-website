import styles from '../../styles/blog.module.css';
import { getAllPosts } from '../../lib/api'
import Meta from '../../components/meta'
import Container from '../../components/container'
import Hero from '../../components/hero'
import Posts from '../../components/posts'
import { getPlaiceholder } from 'plaiceholder'
import path from 'path'



function isExternalUrl(url){
  return url.startsWith('http://')|| url.startsWith('https://');
}

//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from '../../lib/constants'

export default function Blog({posts}){
  return(
    <Container>
      <div className={styles.blogBg} />
      <Meta pageTitle="blog" pageDesc="ブログの記事一覧" />
      <h1 className={styles.title}>News</h1>
      {/* <Hero title="Blog" subtitle="最近の投稿"/> */}

      <Posts posts={posts} />
    </Container>
  )
}
export async function getStaticProps(){
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }

    let blurDataURL = ''
    if (!isExternalUrl(post.eyecatch.url)){
      // ローカル画像の場合
      let imagePath = post.eyecatch.url
      if(imagePath.startsWith('/')){
      imagePath = imagePath.slice(1)
      }
      imagePath = path.join(process.cwd(), 'public', imagePath)
      const { base64 } = await getPlaiceholder(imagePath)
      blurDataURL = base64
    } else {
      // 外部URLの場合はダミーのbase64を設定
      blurDataURL = 'data:image/jpeg;base64,/9j/4AA1SkZJRjABA1AAA1ABAAD.'
    }

    post.eyecatch.blurDataURL = blurDataURL
  }
  
  return{
    props:{
      posts: posts,
    },
  }
}