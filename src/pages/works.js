import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { 
  Avatar, 
  AvatarBadge, 
  AvatarGroup, 
  Wrap, 
  WrapItem,
  Flex,
  Spacer,
  SimpleGrid,
  Box,
  Center,
  Container,
  Text,
  Fade, 
  ScaleFade, 
  Slide, 
  SlideFade,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Button,
 } from '@chakra-ui/react'

import {motion} from 'framer-motion'

import { 
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons'

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()
  const outerBoxStyles = {
    boxSize: '200px',
    p: '10px',

  }

  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  }
  

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Matcho&apos;s portfolio</title>
        <meta name="description" content="Matcho&apos; Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Center h='100%'>
          </Center>
        </Container>
      </main>
    </div>
      

  )
}
