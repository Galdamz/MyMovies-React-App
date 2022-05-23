import React, { createContext, FC, ReactNode, useState } from 'react'
import useLocalStorage from 'use-local-storage';

interface Context {
    setAuthToken: Function,
    setIsLoading: Function,
    isLoading: Boolean,
    authToken: Boolean | String,
}

export const AuthContext = createContext<Context>({
    setAuthToken: () => (null),
    setIsLoading: () => (null),
    authToken: false,
    isLoading: true
});

interface Props {
    children?: ReactNode
};

export const AuthProvider: FC<Props> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [authToken, setAuthToken] = useLocalStorage<Boolean | String>("x-access-token", false);

    return (
        <AuthContext.Provider value={{ isLoading, setAuthToken, setIsLoading, authToken }}>
            {children}
        </AuthContext.Provider>
    )
}