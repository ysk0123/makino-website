import styles from "../styles/shop.module.css";

export default function Shop() {
    return (
      <div className={styles.contentAria}>
        <div className={styles.textContents}>
          <a  className ={styles.link} href="https://makinoart.theshop.jp/">
        <h2 className={styles.title}>Shop</h2>
          view more
          </a>
        </div>
      </div>
  );
}
