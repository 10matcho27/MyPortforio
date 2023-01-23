import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    IconButton,
    MenuItem,
    useColorMode,
    Menu,
    Box,
    Link,
    Boarder
  } from '@chakra-ui/react'

import { 
    AddIcon,
    HamburgerIcon,
    ExternalLinkIcon,
    RepeatIcon,
    MoonIcon,
    SunIcon,
    EmailIcon,
} from '@chakra-ui/icons'

import {
    GitHub,
    Instagram,
    Linkedin,
    Mail,
    Map,
    Moon,
    PenTool,
    Sun,
    Table,
    Twitter,
    User
} from 'react-feather';

import React from 'react'

function OpenDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const btnRef = React.useRef()
    const firstField = React.useRef()
  
    return (
      <>
        <Button 
            ref={btnRef} 
            onClick={onOpen}
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            >
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Index</DrawerHeader>

                <DrawerBody>
                    <Menu>
                        {/* <MenuList> */}
                            <MenuItem 
                                icon={<PenTool />} 
                                fontSize='20px'>
                                Drawings
                            </MenuItem>
                            <MenuItem 
                                icon={<User />} 
                                fontSize='20px'>
                                Sports 
                            </MenuItem>
                            <MenuItem 
                                icon={<Table />} 
                                fontSize='20px'>
                                Conference
                            </MenuItem>
                            <MenuItem 
                                icon={<Mail />} 
                                fontSize='20px'>
                                Contact
                            </MenuItem>
                            <MenuItem 
                                icon={colorMode === 'light' ? <Moon /> : <Sun/>} 
                                onClick={toggleColorMode} 
                                fontSize='20px'>
                                Change Color Mode
                            </MenuItem>
                        {/* </MenuList> */}
                    </Menu>
                    <Box marginTop={10} color='red'>
                        今はカラーモードの変更しか効きません
                    </Box>
                </DrawerBody>

                <DrawerFooter>
                    <Link href='https://www.linkedin.com/in/ryo-takamatsu-42370a242/' isExternal>
                        <Button variant='outline' margin='2px'>
                            {<Linkedin/>}
                        </Button>
                    </Link>
                    <Link href='https://twitter.com/admwtpgj2345?t=65yVVeWG05xWFSGjwJyAAw&s=09' isExternal>
                        <Button variant='outline' margin='2px'>
                            {<Twitter/>}
                        </Button>
                    </Link>
                    <Link href='https://instagram.com/10matcho27?igshid=ZDdkNTZiNTM=' isExternal>
                        <Button variant='outline' margin='2px'>
                            {<Instagram/>}
                        </Button>
                    </Link>
                    <Link href='https://github.com/10matcho27' isExternal>
                        <Button variant='outline' margin='2px'>
                            {<GitHub/>}
                        </Button>
                    </Link>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </>
    )
}
export default OpenDrawer

{/* <Menu shadow="lg">
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
                <MenuItem icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon/>} onClick={toggleColorMode}>
                Change Color Mode
                </MenuItem>
                </MenuList>
            </Menu> */}