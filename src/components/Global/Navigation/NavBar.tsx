import {
    Box,
    Button,
    ButtonGroup,
    Flex,
} from "@chakra-ui/react";


import { StarIcon, } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Link } from '@chakra-ui/react'
import SearchInput from "../SearchInput";
import LogoutBtn from "./LogoutBtn";

const NavBar = () => {


    return (
        < >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <ButtonGroup gap='2'>
                    <Link as={RouterLink} to='/favorites'>
                        <Button leftIcon={<StarIcon />} colorScheme={'yellow'}>Favorites Movies</Button>
                    </Link>
                </ButtonGroup>
                <Box p='2'>
                    <SearchInput />
                </Box>
                <Box>
                    <LogoutBtn />
                </Box>
            </Flex>
        </>
    );
};

export default NavBar;
