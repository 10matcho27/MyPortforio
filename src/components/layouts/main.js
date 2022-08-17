import Head from 'next/head'
import { Box, Container }from '@chakra-ui/react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, router }) => {
  return (
    <>
      
      <Box as="main" pb={8}>
      <Header />
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Matcho&apos; portfolio</title>
        </Head>
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
      </Box>
      <Footer />
    </>  
  )
}

export default Layout