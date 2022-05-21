import { createContext, FC, ReactNode, useEffect, useState } from "react";

export const AuthContext = createContext<Context>({
    getToken: Function,
    deleteToken: Function,
    saveToken: Function,
    setAccessToken: Function
});

interface Props {
    children?: ReactNode
};

interface Context {
    accessToken?: Boolean | String,
    setAccessToken: Function,
    saveToken: Function,
    getToken: Function,
    deleteToken: Function,
    isReady?: Boolean,
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [isReady, setIsReady] = useState<Boolean>(false);
    const [accessToken, setAccessToken] = useState<String | Boolean>(false);

    useEffect(() => {
        setAccessToken(localStorage.getItem('x-access-token') || false);
    }, [isReady, accessToken]);

    const saveToken = (accessToken: String) => {
        localStorage.setItem('x-access-token', accessToken.toString());
        setAccessToken(localStorage.getItem('x-access-token') || false);
    }

    const getToken = () => {
        setAccessToken(localStorage.getItem('x-access-token') || false);
    }

    const deleteToken = () => {
        localStorage.removeItem('x-access-token');
        setAccessToken(false);
    }

    return (
        <AuthContext.Provider
            value={{
                getToken,
                accessToken,
                setAccessToken,
                saveToken,
                deleteToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};