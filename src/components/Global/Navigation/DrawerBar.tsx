import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Divider,
    IconButton,
    Flex,
} from '@chakra-ui/react'

import React, { useRef } from 'react'
import { Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom';

const DrawerBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

    return (
        <>
            <IconButton aria-label='Menu' ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />}>
                Icon
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box>Menu</Box>
                        <Divider mt={4}></Divider>
                        <Flex direction={'column'} gap={4}>
                            <Link as={RouterLink} to={'/'}>
                                <Button minW={'full'}>Home</Button>
                            </Link>
                            <Link as={RouterLink} to={'/favorites'}>
                                <Button minW={'full'}>Favorites</Button>
                            </Link>
                            <Link as={RouterLink} to={'/search'}>
                                <Button minW={'full'}>Search</Button>
                            </Link>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme={'blue'} minW={'full'}>Log Out</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerBar;