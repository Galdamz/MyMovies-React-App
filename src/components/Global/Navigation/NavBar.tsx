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
import { useNavigate } from "react-router-dom";
import { useState, KeyboardEvent, ChangeEvent } from "react";
import SearchInput from "../SearchInput";

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
                    <SearchInput />
                </Box>
            </Flex>
        </>
    );
};

export default NavBar;
