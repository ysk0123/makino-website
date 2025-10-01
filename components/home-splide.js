import styles from "../styles/home-splide.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

export default function HomeSplide({ height = "400px" }) {
  return (
    <>
      <div
        className={styles.splideWrapper}
        style={{ "--splide-height": height }}
      >
      <div className={styles.textContants}>
        <h2 className={styles.splideTitle}>Gallery</h2>
        <a href="/gallery" className={styles.link}>
          View More
        </a>
      </div>

        <a href="/gallery" className={styles.viewMoreLink}>
          <Splide
            style={{ height: height }}
            options ={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              pagination: false,
              arrows: false,
              autoScroll: {
                speed: 1.2,
                pauseOnHover: false,
                pauseOnFocus: false,
                autoStart: true,
              },
              breakpoints: {
                900: {
                  destroy: true,
                },
              },
            }}
            extensions={{ AutoScroll }}
            aria-label="Auto Scroll Splide Example"
          >
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/blueflower.jpg"
                alt="青い花の写真"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/colordropsdress.jpg"
                alt="カラフルなドレス写真"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/colorfullife.jpg"
                alt="カラフルな生活写真"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/flowerhair01.jpg"
                alt="花の髪飾り写真"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/music.jpg"
                alt="音楽の写真"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/drops01.jpg"
                alt="水滴の写真"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.splideImg}
                src="/yellowgirl.jpg"
                alt="黄色い服の女性写真"
              />
            </SplideSlide>
          </Splide>
        </a>
      </div>
    </>
  );
}
