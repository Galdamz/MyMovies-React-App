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
} from '@chakra-ui/react'

import React, { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
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
                    </DrawerHeader>
                    <DrawerBody>
                    </DrawerBody>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerBar;