import '../styles/globals.css'
import { Noto_Sans_JP, Manrope } from "next/font/google";
import Layout from '../components/layout'

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-jp",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-en",
});

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    return (
      <div className={`${notoSansJP.variable} ${manrope.variable}`}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      </div>
    )
}

export default MyApp