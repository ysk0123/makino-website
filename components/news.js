import { Noto_Sans_JP, Manrope } from "next/font/google";
    import styles from "../styles/news.module.css";
    import Link from 'next/link'

    const notoSansJP = Noto_Sans_JP({
      subsets: ["latin", "japanese"],
      weight: ["100", "300", "400", "500", "700", "900"],
      variable: "--font-noto-sans-jp",
    });
    const manrope = Manrope({
      subsets: ["latin"],
      weight: ["200", "400", "500", "600", "700"],
      variable: "--font-manrope",
    });
export default function News({ posts = [] }){
    return(
      <>
        <h2 className={styles.title}>News</h2>
        <div className={styles.newsContainer}>
          {posts.slice(0, 4).map(({ title, slug, publishDate }) => (
            <dl className={styles.posts} key={slug}>
              <dt className={styles.date}>{publishDate}</dt>
              <dd className={`${notoSansJP.className} ${manrope.className} ${styles.blog_title}`} style={{ fontWeight: 100 }}>
                <Link href={`/blog/${slug}`}>
                  {title}
                </Link>
              </dd>
            </dl>
          ))}
        </div>
      </>
    )

}