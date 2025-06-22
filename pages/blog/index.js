import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Blog(){
  return(
    <Container>
      <Meta pageTitle="blog" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="最近の投稿"/>
    </Container>
  )
}