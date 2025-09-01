import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/logo.module.css'

export default function Logo(){
    return (
        <Link href="/" className={styles.logoLink}>

            <Image 
                src="/logo_black.png" 
                alt="MAKINO Web Logo" 
                priority
                width={200}
                height={80} 
                className={styles.logoImage}
                />
        </Link>
    )
}