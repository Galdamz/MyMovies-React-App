import { useState } from 'react'
import useLocalStorage from 'use-local-storage';

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [authToken, setAuthToken] = useLocalStorage<String | Boolean>("x-access-token", false);


    return { authToken, setAuthToken, isLoading, setIsLoading }
}

export default useAuth;