import Link from 'next/link';
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { 
    AddIcon,
    HamburgerIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon 
} from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

    IconButton,
} from '@chakra-ui/react'
  

export default function Header() {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            color="black"
        >
            <Box>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='20px'
                    fontWeight='extrabold'
                    >
                    Matcho
                    </Text>
            </Box>
            <Menu shadow="lg">
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
            
        </Flex>
    );
}
