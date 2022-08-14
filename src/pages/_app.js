// import '../styles/globals.css'
import * as React from 'react'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
// import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
