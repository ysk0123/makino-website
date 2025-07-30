import styles from '../styles/globals.css'
import { Noto_Sans_JP, Manrope } from "next/font/google";
import Layout from '../components/layout'

//Google Font　設定
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin", "japanese"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


// export default function RootLayout({ children }) {
//   return (
//     <html lang="ja" className={`${notoSansJP.variable} ${manrope.variable}`}> 
//       <body className={`${notoSansJP.className} ${manrope.className}`}> 
//         {children}
//       </body>
//     </html>
//   )
// }
function MyApp({ Component, pageProps }) {
    return (
      <div className={{ Component, pageProps }}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      </div>
    )
}

export default MyApp