import { createContext, FC, ReactNode, useEffect, useLayoutEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Auth } from "../types/types";

export const AuthContext = createContext<Context>({
    isLoading: false,
    auth: false,
    updateToken: Function,
    saveToken: Function
});

interface Props {
    children?: ReactNode
};

interface Context {
    isLoading: Boolean,
    auth?: Auth,
    saveToken?: Function,
    deleteToken?: Function,
    updateToken?: Function,
}

export const AuthProvider: FC<Props> = ({ children }) => {

    useEffect(() => {
        updateToken()
        setIsLoading(false)
    }, []);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const { auth, saveToken, deleteToken, updateToken } = useAuth();

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                auth,
                saveToken,
                deleteToken,
                updateToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};