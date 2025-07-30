import styles from '../styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial'}) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://www.facebook.com/makino.art">
                <FontAwesomeIcon icon={faFacebook} />
                <span className="sr-only">Twitter</span>                
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/makino__art/">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="sr-only">Instagram</span>                
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCLHWvi0OJHdfTwueq51rMtg">
                <FontAwesomeIcon icon={faYoutube} />
                <span className="sr-only">YouTube</span>                
                </a>
            </li>
        </ul>
    )
}