import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex';

const PrivateRoute = () => {

    const { accessToken } = useContext(AuthContext);

    return (
        < >
            {(true) ? <Outlet /> : <Navigate to={'/auth/login'} />}
        </>
    )
}

export default PrivateRoute;