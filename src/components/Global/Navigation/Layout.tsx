import { Box, Button, Flex, Heading, Spacer, useMediaQuery } from '@chakra-ui/react'
import NavBar from './NavBar';
import DrawerBar from './DrawerBar';
import { Link as RouterLink } from "react-router-dom";
import { Link } from '@chakra-ui/react'
const Layout = () => {

  const [isLargerThan1280] = useMediaQuery('(min-width: 810px)');

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' m={4} >
      <Box p='2'>
        <Link as={RouterLink} to='/'>
          <Button>
            <Heading size='sm'>MyMovies</Heading>
          </Button>
        </Link>
      </Box>
      <Spacer></Spacer>
      <Box>
        {
          (isLargerThan1280) ? <NavBar /> : <DrawerBar />
        }
      </Box>
    </Flex>
  )
}

export default Layout;