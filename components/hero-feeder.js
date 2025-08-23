import { useEffect, useState } from "react";
import styles from "../styles/hero-feeder.module.css";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function HeroFeeder({ width = "100vw", height = "100vh" }){
    const [isMobile,setIsMobile] = useState(false);
//画面幅９００px以下でfeederを停止
//_
    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        checkWidth();
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    }, []);
    const images = Array.from({ length: 10 }, (_, i) => `/top-${i + 1}.jpg`);
    
    if (isMobile) {
        return (
            <div className={styles.mobileScrollContainer}>
                  <div className={styles.mobileSlide}>
                    <img className={styles.mobileImg} src="top_sp.jpg" alt="top_SP用画像"/>
                    </div>
            </div>
        )    
}
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
{images.map((src, index) => (
            <SplideSlide key={index}>
                <img className={styles.splideImg} src={src} alt={`slide-${index}`} />
            </SplideSlide>
        ))}
        </Splide>
        {/* <SplideSlide>
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
        </SplideSlide> */}
        </>
    )
}