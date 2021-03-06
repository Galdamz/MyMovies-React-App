import { useState, useContext } from 'react'
import fetchAuth from '../../api/fetchAuth';
import { useForm } from "react-hook-form";
import { Heading, Input, SimpleGrid, Button, FormControl, FormLabel, Box, Center, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import MovieIcon from '../../assets/icons/movie.png';
import { AuthContext } from '../../context/AuthContext';

const LoginView = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [isIncorrect, setIsIncorrect] = useState(false);
    const { authToken, setAuthToken, setIsLoading } = useContext(AuthContext);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsIncorrect(false);
            const response = await fetchAuth.post('', data);
            setAuthToken(response.data.token || false)
            navigate('/')
        } catch (error) {
            setIsIncorrect(true);
        }
    });

    return (
        <Box
            minHeight={{ base: '60vh', md: '80vh' }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}>
            <form onSubmit={onSubmit}>
                <SimpleGrid columns={1} spacing={4} minWidth={{ base: '300px', sm: '300px', md: '310px' }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Image src={MovieIcon} maxHeight={'8em'} />
                    </Box>
                    <Box>
                        <Heading>Log In</Heading>

                    </Box>
                    <Box>
                        <FormControl isInvalid={isIncorrect}>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input
                                id='email'
                                placeholder='Email'
                                type={'email'}
                                {...register('email', { required: true })}
                            />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl isInvalid={isIncorrect}>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input
                                id='password'
                                placeholder='Password'
                                {...register('password', { required: true })}
                                type={'password'}
                            />
                        </FormControl>
                    </Box>
                    <Center>
                        {
                            (isIncorrect) && <Text color={'red'}>User or Password are incorrect</Text>
                        }
                    </Center>
                    <Box>
                        <Button
                            colorScheme={'blue'}
                            minWidth={'full'}
                            type='submit'>
                            Log In
                        </Button>
                    </Box>
                </SimpleGrid>
            </form>
        </Box>
    )
}

export default LoginView;