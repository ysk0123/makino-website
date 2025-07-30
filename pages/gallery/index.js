import Head from "next/head";
import Image from "next/image";
import { getGalleryImages } from "../../lib/api";
import Container from "../../components/container";
import styles from "../../styles/gallery.module.css";  
//サーバーサイドでデータを取得する
export async function getStaticProps() {
  const posts = await getGalleryImages(100);
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export default function Gallery({ posts }) {
  console.log(posts); // 追加してデータ構造を確認
  return (
    <>
      <Container>
        <Head>
          <title>Gallery.</title>
          <meta name="description" content="Gallery of images from my blog." />
        </Head>
        <div className={styles.gallery}>
          <h1>Gallery</h1>
          <div className={styles.galleryGrid}>
            {posts.map((post) => (
              <div key={post.id} className="gallery-item">
                {post.eyecatch && post.eyecatch.url ? (
                  <Image
                    src={post.eyecatch.url}
                    alt={post.title}
                    width={360}
                    height={360}
                    style={{ objectFit: "cover" }}
                    className="gallery-image"
                    placeholder="blur"
                    blurDataURL={
                      post.eyecatch.blurDataURL ||
                      "/images/default-image-blur.jpg"
                    }
                  />
                ) : (
                  <div
                    style={{ width: 300, height: 200, background: "#ccc" }}
                  />
                )}
                {/* <h2>{post.title}</h2> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
