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
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${manrope.className} ${styles.list} space-y-6 md:space-y-0 md:space-x-8`}>
  {[
    { name: "Top", href: "/" },
    { name: "News", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
  ].map((item) => (
    <li key={item.name} className="relative group">
      <Link
        href={item.href}
        onClick={closeNav}
        className="transition duration-300 group-hover:text-gray-400"
      >
        {item.name}
      </Link>
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </li>
  ))}

  <li className="relative group">
    <a
      href="https://makinoart.theshop.jp/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeNav}
      className="transition duration-300 group-hover:text-gray-400"
    >
      Shop
    </a>
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
  </li>
</ul>
    </nav>
  );
}
