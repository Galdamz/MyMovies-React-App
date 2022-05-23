import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import { Auth } from '../../types/types';

interface Props {
    auth: Auth,
    isLoading: Boolean,
}

const PrivateRoute = () => {

    const { authToken, setAuthToken, isLoading } = useContext(AuthContext)

    useEffect(() => {
        return () => {
        }
    }, [])

    return (
        < >
            {
                (isLoading)
                    ? <></>
                    : <>
                        {
                            (authToken) ? <Outlet /> : <Navigate to={'/auth/login'} />
                        }
                    </>
            }
        </>
    )
}

export default PrivateRoute;