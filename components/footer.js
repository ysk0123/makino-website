import Link from "next/link";
import Container from "../components/container";
import Logo from "../components/logo";
import Social from "../components/social";
import styles from "../styles/footer.module.css";
import { Tangerine } from "next/font/google"

const tangerine = Tangerine({
  subsets:["latin"],
  weight:["400", "700"]
})

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <ul className={`${tangerine.className} ${styles.footerList}`}>
            <li className={styles.li}>
              <Link href="/">
              Top 
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/blog">
              News
              </Link>
            </li>
            <li className={styles.li}> 
              <Link href="/gallery">
              Gallery
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="https://makinoart.theshop.jp/">
              Shop
              </Link> 
            </li>
            <li className={styles.li}>
              <Link href="/about">
              About 
              </Link>
            </li>
          </ul>
          <Social />
        </div>
      </Container>
    </footer>
  );
}
