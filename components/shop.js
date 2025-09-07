import styles from "../styles/shop.module.css";

export default function Shop() {
    return (
      <div className={styles.contentAria}>
        <div className={styles.textContents}>
        <h2 className={styles.title}>Shop</h2>
          <a  className ={styles.link} href="https://makinoart.theshop.jp/">
          view more
          </a>
        </div>
      </div>
  );
}
