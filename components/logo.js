import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/logo.module.css'

export default function Logo({ boxOn = false }){
    return (
        <Link href="/" className={boxOn ? styles.box : styles.basic}>
            <Image 
                src="/logo_black.png" 
                alt="MAKINO Web Logo" 
                width={240} 
                height={80}
                priority
                className={styles.logoImage}
            />
        </Link>
    )
}