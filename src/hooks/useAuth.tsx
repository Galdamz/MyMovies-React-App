import React from 'react'
import useLocalStorage from 'use-local-storage';

const useAuth = () => {
    const [authToken, setAuthToken] = useLocalStorage<String | Boolean>("x-access-token", false);
    return { authToken, setAuthToken }
}

export default useAuth;