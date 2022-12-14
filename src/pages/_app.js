// import '../styles/globals.css'
// import * as React from 'react'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
