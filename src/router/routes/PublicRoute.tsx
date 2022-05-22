import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex';

const PublicRoute = () => {

    return (
        < >
            {(false) ? <Outlet /> : <Navigate to={'/auth/login'} />}
        </>
    )
}

export default PublicRoute;