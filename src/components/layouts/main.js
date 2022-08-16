import Head from 'next/head'
import { Box, Container }from '@chakra-ui/react'
import Header from './header'

const Layout = ({ children, router }) => {
  return (
    <>
      <Header />
      <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Matcho&apos; portfolio</title>
        </Head>
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
      </Box>
    </>  
  )
}

export default Layout