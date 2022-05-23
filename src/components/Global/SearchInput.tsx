import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {

    const navigate = useNavigate();

    const [filter, setFilter] = useState<String>('')

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        return setFilter(event.currentTarget.value);
    }

    const sentSearch = () => {
        if (!filter || filter === "") {
            navigate('/search/')
        } else {
            navigate('/search/?filter="' + filter + '"',)
        }
    }

    useEffect(() => {
        return () => {

        }
    }, [filter])

    return (
        <InputGroup>
            <Flex>
                <Box minWidth={'40vh'}>
                    <Input type='text'
                        placeholder='Search a Movie'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
                        value={filter.toString()}
                    />
                </Box>
                <InputRightElement
                    children={
                        <IconButton
                            onClick={sentSearch}
                            colorScheme={'blue'}
                            aria-label="Search a Movie"
                            icon={<SearchIcon
                            />}
                        />
                    } />
            </Flex>
        </InputGroup>
    )
}

export default SearchInput;