// import '../styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      
      <Component {...pageProps} />
      
    </ChakraProvider>
  )
}

export default MyApp
