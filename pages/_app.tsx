import '../styles/globals.css'
import store from "../state-store"
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from "../styles/style"

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={Theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
}

export default MyApp
