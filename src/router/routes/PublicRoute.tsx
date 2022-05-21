import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex';

const PublicRoute = () => {

    const { accessToken, getToken } = useContext(AuthContext);
    return (
        < >
            {(accessToken) ? <Navigate to={'/'} /> : <Outlet />}
        </>
    )
}

export default PublicRoute;