import { Heading, Input, SimpleGrid, Button, FormControl, FormLabel, Box, FormErrorMessage, Center, Text } from '@chakra-ui/react'
import { useState, FormEvent } from 'react'
import fetchAuth from '../../api/fetchAuth';
import { useForm } from "react-hook-form";

const LoginView = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isIncorrect, setIsIncorrect] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsIncorrect(false);
            const response = await fetchAuth.post('', data)
            console.log(response);
        } catch (error) {
            setIsIncorrect(true);
            console.log(error);
        }
    });

    return (
        <Box
            minHeight={{ base: '80vh', md: '80vh' }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}>
            <form onSubmit={onSubmit}>
                <SimpleGrid columns={1} spacing={4} minWidth={{ sm: '300px', md: '310px' }}>
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