import styles from "../styles/shop.module.css";

export default function Shop() {
  return (
    <div className={styles.shopWrapper}>
        <div className={styles.textContents}>
          <h2 className={styles.title}>Shop</h2>
          <a className={styles.link} href="https://makinoart.theshop.jp/">
            view more
          </a>
        </div>
      <img className={styles.shopImg} src="shop.jpg" />
    </div>
  );
}
