import React, { useEffect, useState } from 'react'
import { Auth } from '../types/types';

const useAuth = () => {
    const [auth, setAuth] = useState<Auth>(false);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    const saveToken = (accessToken: String) => {
        localStorage.setItem('x-access-token', String(accessToken));
        setAuth(accessToken);
    }

    const deleteToken = (accessToken: String) => {
        localStorage.removeItem('x-access-token');
        setAuth(false);
    }

    const updateToken = () => {
        const token = localStorage.getItem('x-access-token') || false;
        setAuth(token);
    }

    return { auth, saveToken, deleteToken, updateToken, isLoading, setIsLoading };
}

export default useAuth;