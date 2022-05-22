import {
    Box,
    ButtonGroup,
    Divider,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";

import { SearchIcon, StarIcon, } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Link } from '@chakra-ui/react'
const NavBar = () => {
    return (
        < >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <ButtonGroup gap='2'>
                    <Link as={RouterLink} to='/favorites'>
                        <IconButton aria-label="Favorite Movies" icon={<StarIcon />}
                            colorScheme={'yellow'}
                        />
                    </Link>
                </ButtonGroup>
                <Box p='2'>
                    <InputGroup>
                        <Box minWidth={'40vh'}>
                            <Input type='text' placeholder='Search a Movie' />
                        </Box>
                        <InputRightElement
                            children={
                                <IconButton
                                    colorScheme={'blue'}
                                    aria-label="Search a Movie"
                                    icon={<SearchIcon />}
                                />
                            } />
                    </InputGroup>
                </Box>
            </Flex>
        </>
    );
};

export default NavBar;
