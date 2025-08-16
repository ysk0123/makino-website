import styles from '../styles/hero.module.css'
import Image from 'next/image'
import lookat from '../images/look.jpg'
import { Noto_Sans_JP, Manrope } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
    subsets:["latin"],
    weight:["100", "300", "400", "500", "700", "900"],
    variable: "--font-noto-sans-jp",
});
const manrope = Manrope({
    subsets:["latin"],
    weight:["200", "400", "500", "600", "700"],
    variable: "--font-manrope",
});
export default function Hero({ className, title, subtitle, imageOn = false }){
    return(
        <div className={className}>
        <div className={styles.flexContainer}>
            {imageOn && (
                <figure className={styles.image}>
                  <Image 
                    src={lookat} 
                    alt="" 
                    sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
                    priority
                    fill
                    placeholder="blur"
                    style={{
                        objectFit: 'cover',
                    }}
                    />
                </figure>
                )}
            <div className={styles.text}>
            <h1 className={`${styles.title} ${notoSansJP.className} ${manrope.className}`}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    </div>
    )
}