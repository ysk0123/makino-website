import { useState } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
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
export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media screen and (max-width: 900px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
      </button>
      <ul
        className={`${notoSansJP.className} ${manrope.className} ${styles.list}`}
      >
        <li>
          <Link href="/" onClick={closeNav}>Top</Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>News</Link>
        </li>
        <li>
          <Link href="/gallery" onClick={closeNav}>Gallery</Link>
        </li>
        <li>
          <Link href="https://makinoart.theshop.jp/" onClick={closeNav}>Shop</Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
