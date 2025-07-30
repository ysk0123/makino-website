import Link from 'next/link'
import styles from '../styles/nav.module.css'
import { Noto_Sans_JP, Manrope } from "next/font/google";

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
export default function Nav(){
	return(
		<nav>
			<ul className={`${notoSansJP.className} ${manrope.className} ${styles.list}`}>
				<li>
					<Link href="/">
						Top
					</Link>
				</li>
				<li>
				<Link href="/blog">
					News
					</Link>
				</li>
				<li>
					<Link href="/gallery">
					Gallery
					</Link>
				</li>
				<li>
					<Link href="https://makinoart.theshop.jp/">
					Shop
					</Link>
				</li>
				<li>
					<Link href="/about">
					About
					</Link>
				</li>
			</ul>
		</nav> 
	)
}