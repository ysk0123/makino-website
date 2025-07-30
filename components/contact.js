import Social from '../components/social'
import styles from '../styles/contact.module.css'

export default function Contact(){
    return(
        <div className={styles.stack}>
        <h3 className={styles.heading}>Contact</h3>
        <Social iconSize="30px" />
        <a href="mailto:artist.makino@gmail.com" className={styles.mailLink}>artist.makino@gmail.com</a>

        </div>
    )
}