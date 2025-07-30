import styles from "../styles/about.module.css";
import Meta from "../components/meta";
import Container from "../components/container";
import Hero from "../components/hero";
import PostBody from "../components/post-body";
import Contact from "../components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../components/two-column";
import Image from "next/image";
import profileImg from "../images/profile.jpg";
import eyecatch from "../images/laceflower.jpg";

export default function About() {
  return (
    <Container>
      <div className={styles.aboutBg} />
      <Meta
        pageTitle="About"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      {/* <Hero className={styles.heroCustom} title="About" /> */}

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h1 className={styles.title}>About</h1>
            {/* <div className={styles.profileWrapper}></div> */}
            <div className={styles.aboutDesc}>
              <div className={styles.profile}>
                <img
                  src={profileImg.src}
                  alt="プロフィール画像"
                  width={300}
                  height={523}
                  className={styles.profileImg}
                />
                <h2>MAKINO</h2>
                <h2 className={styles.profileText}>
                  Artist / Illustrator / Designer
                </h2>
              </div>
            </div>
            <div className={styles.aboutTextWrapper}>
              <p className={styles.aboutDescText}>
                日本のアパレル企業でファッションデザイナーを経験したのち、ニューヨークへ渡米。現地で活躍するグラフィティアーティストと共に、メッシュキャップブランド「SPREGIRL」を立ち上げる。
                帰国後、米国人壁画家Hugue Roger
                Matheiu氏に師事し、アカデミーアートの基礎を学ぶ。 Masa Mode
                Academy研究科、CYD卒業。
                私のバックグラウンドにはファッション、モード、グラフィティがあります。
                そこへ、Hugue Roger
                Matheiu氏から受け継いだアカデミックな芸術を取り入れて、作品を制作しています。
                女性や自然、花をモチーフに、テーマはエレガンス、モード、ラグジュアス、ナチュラル。鉛筆でディティールや繊細さを表現する一方、日本の伝統的な墨や筆を使って大胆なストロークを描いたり、水彩の滲みを自然に委ねて生みだす。そんな相反するものを組み合わせて、一つの作品としてまとめています。
                「観る」だけではなく、「感じる」ことのできるアート、観たときにときめくアート、衝撃を受けるアート、人を幸せにするアートを目指しています。
              </p>
              <p className={styles.aboutDescText}>
                My background is in graphic arts:painting,drawing,design,and
                fashion illustration. I studied academic art and was mentored by
                the artist Hugue Roger Matheiu. I combine fashion illustration
                with the academic art to create my work. I use women, nature and
                flowers as motifs, the themes are elegance, mode, luxury and
                natural. I use pencil to express detail, while I use traditional
                Japanese calligraphy ink and brushes to create bold strokes and
                watercolor blotches, letting nature take its course. I combine
                such contradictions and bring them together in my art work. I
                love creating art that not only “looks” but also “feels”, art
                that excites and impacts you when you look it, and art that
                makes people happy.
              </p>
              <h3>[Exhibition]</h3>
              <dl className="exhibition">
                <h4>2025</h4>
                <p>
                  2025.01.14~20 シタディーンなんば大阪「Woman is in the flowers
                  -女は花に宿る-個展」
                </p>
                <h4>2023</h4>
                <dt>2023.01.18~24</dt>
                <dd>高槻阪急「今推しアーティストによるtriple（トリプル）個展Week103」</dd>
                <h4>2022</h4>
                <dt>2022.12.21~27</dt>
                <dd>「アトリエの冬時間」ONE-L flowerとのコラボ展阪急うめだ本店10階セッセギャラリー</dd>
                <dt>2022.07.07~07.16</dt>
                <dd>GalleryIYN/ Creation Cafe IYN「Beautiful」企画展</dd>
                <dt>2022.03.30~04.03</dt>
                <dd>高槻阪急「人気アーティストによるtriple（トリプル）個展」</dd>
                <h4>2021</h4>
                <dt>2021.12.10~12</dt>
                <dd>平和芸術展 ギャラリーくぼた本館</dd>
                <dt>2021.12.08〜20</dt>
                <dd>アパレルショップポスター展示 神戸阪急</dd>
                <dt>2021.11.26~12.26</dt>
                <dd>kahogosoap POPUPストア 東急ハンズ梅田店</dd>
                <dt>2021.11.20~22</dt>
                <dd>IYN Art Festival in 神戸阪急</dd>
                <dt>2021.10</dt>
                <dd>
                  UNKNOWN ASIA 2021 FM802DJ <span>大抜卓人賞受賞</span>
                </dd>
                <dt>2021.9</dt>
                <dd>
                  展示会「雅〜白鶴が似合うあの人」 Gallery IYN
                  <span>白鶴優秀賞受賞</span>
                </dd>
                <dt>2021.4</dt>
                <dd>
                  展示会「第3回文房堂アワード」文房堂ギャラリー
                  <span>企業協賛賞「大額賞」受賞</span>
                </dd>
                <dt>2021.2</dt>
                <dd>わたしとやさいとことば展</dd>
                <dt>2021.2</dt>
                <dd>展示会「SELECTED ILLUSTRATION BOYS」文房堂ギャラリー</dd>
                <dt>2020</dt>
                <dd>
                  UNKNOWN ASIA ONLINE 2020
                  <span>株式会社シュガー 上嶋和巳賞受賞</span>
                </dd>
                <dt>2021</dt>
                <dd>個展「I Am A Woman」Gallery SPOON</dd>
                <dt>2011</dt>
                <dd>グループ展 "KISS"Gallery SPOON</dd>
                <dt>2011</dt>
                <dd>個展「FALL IN LOVE」大阪玉造MAGATAMAcafexdining</dd>
                <dt>2011</dt>
                <dd>グループ展「EpicureaRythm」大阪玉造MAGATAMAcafexdining</dd>
                <dt>2011</dt>
                <dd>
                  グループ展「3rd 100 Artist Show theme”RED”」Ouchi Gallery(NY)
                </dd>
                <dt>2006</dt>
                <dd>「御堂筋パレード」肖像画パフォーマンス</dd>
              </dl>
            </div>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
