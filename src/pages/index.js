import Head from 'next/head'
import Image from 'next/image'
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
 } from '@chakra-ui/react'

 import { 
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon 
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
        <title>Matcho portfolio</title>
        <meta name="description" content="Matcho Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
        <MenuItem icon={<AddIcon />} command='a'>
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command='i'>
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command='u'>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command='e'>
         Open File...
        </MenuItem>
        </MenuList>
      </Menu>
      
      <main className={styles.main}>
        
        <Flex>
          <Box width="100%" maxWidth="1200px" mx="auto" onClick={onToggle}>
          <Avatar 
            name="Matcho" 
            src='/images/Matcho.jpg'
            size="xl"
            shadow="2xl" />
            <Text fontSize='3xl'>Matcho</Text>
          </Box>
        </Flex>
        <ScaleFade initialScale={0.9} in={isOpen}>
        <Box 
          p='200px'
          color='white'
          mt='4'
          bg='gray.800'
          rounded='md'
          shadow='xl'
        >
          Fade
        </Box>
      </ScaleFade>
      </main>

      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' aaaaaaa '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
