import { useEffect, useState } from "react";
import styles from "../styles/hero-feeder.module.css";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "next/image";

export default function HeroFeeder({ width = "100%", height = "100vh" }){
    const [isMobile,setIsMobile] = useState(false);

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
                    <Image
                        className={styles.mobileImg}
                        src="top_sp.jpg"
                        alt="top_SP用画像"
                        fill
                        width={400}
                        height={300}
                    />
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
                <Image
                   className={styles.splideImg}
                   src={src}
                   alt={`slide-${index}`}
                   width={400}
                   height={300}
                />
            </SplideSlide>
        ))}
        </Splide>
        </>
    )
}