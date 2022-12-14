import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "next-themes" 

function MyApp({ Component, pageProps:  { session, ...pageProps } }: any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>

    </ThemeProvider>
  )
}

export default MyApp
