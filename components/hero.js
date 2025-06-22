import styles from 'styles/hero.module.css'
import Image from 'next/image'
import colorful from 'images/colorfullife.jpg'

export default function Hero({  title, subtitle, imageOn = false }){
    return(
        <div className={styles.flexContainer}>
            <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn && (
                <figure className={styles.image}>
                  <Image src={colorful} alt="" layout="responsive"
                    sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
                )}
        </div>
    )
}