import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight:['200', '300', '400', '600']
})
export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={poppins.className}>
    <Component {...pageProps} />
  </div>
  )
  
 
}
