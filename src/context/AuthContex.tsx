import { createContext, FC, ReactNode, useEffect, useLayoutEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Auth } from "../types/types";

export const AuthContext = createContext<Context>({
    isLoading: false,
    auth: false,
    updateToken: () => null,
});

interface Props {
    children?: ReactNode
};

interface Context {
    isLoading: Boolean,
    auth?: Auth,
    deleteToken?: Function,
    updateToken?: Function,
    setIsLoading?: Function,
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const { auth, saveToken, deleteToken, updateToken, setIsLoading, isLoading } = useAuth();

    useEffect(() => {
        if (isLoading) {
            updateToken()
            setIsLoading(false)
        }else{
            console.log('Es falso');
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                auth,
                deleteToken,
                updateToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};