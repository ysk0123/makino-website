import { getAllPosts } from '../lib/api'
import Container from '../components/container'
import Hero from '../components/hero'
import Posts from '../components/posts'
import Pagination from '../components/pagination'
import News from '../components/news'
import { getPlaiceholder } from 'plaiceholder'
import path from 'path'
import HomeSplide from '../components/home-splide'
import{ Noto_Sans_JP, Manrope } from "next/font/google";
import HeroFeeder from '../components/hero-feeder'
import Shop from '../components/shop'
import About from '../components/about'

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin", "japanese"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight:["200","400","500","600","700"],
  variable: "--font-manrope",
})
//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from '../lib/constants'

function isExternalUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export default function Home({ posts }){
    return(
      <>
      <meta />
        <HeroFeeder/>
        <Container>
        <News posts={posts}  />
          <div style={{ margin: "2em 0" }}>
            <a href="/blog" className={`${notoSansJP.className} ${manrope.className}`}>view more</a>
          </div>
          {/* <div style={{ marginBottom: "400px" }}></div> */}
          </Container>
          {/* <h2 className={`${notoSansJP.className} ${manrope.className}`} style={{ fontWeight: 100, fontSize:"2.25rem",marginTop:"650px",marginLeft:"9%"}}>Gallery</h2> */}
          <HomeSplide height="800px"/>
          <Container>
            <Shop />
          <About />
      </Container>
      </>
    )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if(!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    
    let blurDataURL = ''
    if (!isExternalUrl(post.eyecatch.url)) {
      // ローカル画像の場合のみplaiceholderを使う
      let imagePath = post.eyecatch.url
      if (imagePath.startsWith('/')) {
        imagePath = imagePath.slice(1)
      }
      imagePath = path.join(process.cwd(), 'public', imagePath)
      const { base64 } = await getPlaiceholder(imagePath)
      blurDataURL = base64
    }
    post.eyecatch.blurDataURL = blurDataURL
  }
  return {
    props: {
      posts: posts,
    }
  }
}