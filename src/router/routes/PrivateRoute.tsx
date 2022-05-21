import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex';

const PrivateRoute = () => {

    const { accessToken, getToken } = useContext(AuthContext);

    // useEffect(() => {
    //     console.log(accessToken);
    // }, [])

    return (
        < >
            {(accessToken) ? <Outlet /> : <Navigate to={'/auth/login'} />}
        </>
    )
}

export default PrivateRoute;