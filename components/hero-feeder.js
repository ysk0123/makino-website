import styles from "../styles/hero-feeder.module.css";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function HeroFeeder({ width = "100vw", height = "100vh" }){
    return(
        <>
        <Splide 
        className={styles.splideContainer}
        style= {{ width: width, height: height }}
        options={{
            type: 'fade',
            perPage: 1,
            autoplay: true,
            interval: 4000,
            pagination: false,
            arrows: false,
            rewind: true,
            pauseOnHover:false,
            pauseOnFocus: false,
        }}
        >
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-1.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-2.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-3.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-4.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-5.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-6.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-7.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-8.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-9.jpg"
            alt=""
            />
        </SplideSlide>
        <SplideSlide>
            <img className={styles.splideImg}
            src="/top-10.jpg"
            alt=""
            />
        </SplideSlide>
        </Splide>
        </>
    )
}