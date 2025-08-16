import styles from '../styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Noto_Sans_JP, Manrope } from "next/font/google";
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

function isExternalUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export default function Posts({ posts }) {
    return(
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, publishDate }) => (
             <article className={styles.post} key={slug}>
                <Link href={`/blog/${slug}`}>
               {/* eyecatch画像は非表示にする */}
                {/* <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 576px, 50vw"
                        placeholder={isExternalUrl(eyecatch.url) ? undefined : "blur"}
                        blurDataURL={eyecatch.blurDataURL}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        />
                </figure> */}
                {/* //ブログのタイトルのみ表示 */}

                  <span className={styles.publishDate}>{publishDate ? publishDate.slice(0, 10) : ''}</span>
                <h2 className={`${notoSansJP.className} ${manrope.className} ${styles.title}`}>
                  {title}
                </h2>
                </Link>
             </article>   
            ))}
        </div>
    )

}