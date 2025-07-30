import styles from "../styles/home-about.module.css";
export default function About() {
  return (
      <div className={styles.contentAria}>
        <div className={styles.textContents}>
        <h2 className={styles.title}>About</h2>
          <a  href="http://localhost:3000/about" className={styles.link}>view more</a>
        </div>
      </div>
  );
}
