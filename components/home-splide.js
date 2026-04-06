import styles from "../styles/home-splide.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function HomeSplide({ height = "400px" }) {
  return (
    <section className="py-24">
      {/* タイトル（制限あり） */}
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <SectionHeader
          title="Gallery"
          link="/gallery"
          className="mb-12 border-b pb-4"
        />
      </div>

      {/* スライド（フル幅） */}
      <div
        className={`w-full mt-12 ${styles.splideWrapper}`}
      >
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "1rem",
            pagination: false,
            arrows: false,
            autoScroll: {
              speed: 0.5, // 少し落とす
              pauseOnHover: false,
              pauseOnFocus: false,
              autoStart: true,
            },
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/blueflower.jpg"
                alt="青い花の写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
                priority
              />
            </div>
          </SplideSlide>
          <SplideSlide>
             <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/colordropsdress.jpg"
                alt="カラフルなドレス写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
             <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/colorfullife.jpg"
                alt="カラフルな生活写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
             <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/flowerhair01.jpg"
                alt="花の髪飾り写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
             <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/music.jpg"
                alt="音楽の写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
             <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/drops01.jpg"
                alt="水滴の写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
             <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <Image
                src="/yellowgirl.jpg"
                alt="黄色い服の女性写真"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 will-change-transform"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
