import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import { Auth } from '../../types/types';

interface Props {
    auth: Auth,
    isLoading: Boolean,
}

const PrivateRoute = () => {

    const { authToken, setAuthToken } = useAuth();

    return (
        < >
            {
                (authToken) ? <Navigate to={'/'} /> : <Outlet />
            }
        </>
    )
}

export default PrivateRoute;