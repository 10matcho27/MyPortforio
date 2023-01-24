import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import React from 'react'
import Link from 'next/link';
import { 
    AddIcon,
    HamburgerIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon ,
    MoonIcon,
    SunIcon,
    Tooltip,
    Cus,
    Tag
} from '@chakra-ui/icons'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'

import { useState, useEffect } from "react"

import OpenDrawer from "../../lib/drawer";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('red.500', 'red.200')
    const [ textBgColor, setTextBgColor ] = useState(colorMode === 'light' ? 'linear(to-r, #44337A, #702459)' : 'linear(to-r, #FFF5F7, #FAF5FF)')
    const [ headBgColor, setHeadBgColor ] = useState(colorMode === 'light' ? 'linear(to-r, #FFF5F7, #FAF5FF)' : 'linear(to-r, #702459, #FAF5FF)')
    // const color = useColorModeValue('white', 'gray.800')
    useEffect(()=>{
        setHeadBgColor(colorMode === 'light' ? 'linear(to-r, #FFF5F7, #FAF5FF)' : 'linear(to-r, #702459, #44337A)')
        setTextBgColor(colorMode === 'light' ? 'linear(to-r, #44337A, #702459)' : 'linear(to-r, #FFF5F7, #FAF5FF)')
    })
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bgGradient={headBgColor}
        >
            <Link href="/">
                {/* <Tooltip label='Go back to home'> */}
                    <Button
                        bgClip='text'
                        // bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgGradient={textBgColor}
                        _hover={{
                            bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                        
                        fontSize='20px'
                        fontWeight='extrabold'
                        variant='ghost'
                        >
                        Matcho&apos;s Portfolio
                    </Button>
                {/* </Tooltip> */}
            </Link>
            
            <OpenDrawer/>
        </Flex>
        
    );
}
