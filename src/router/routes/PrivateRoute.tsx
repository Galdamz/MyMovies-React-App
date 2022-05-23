import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex';
import { Auth } from '../../types/types';

interface Props {
    auth: Auth,
    isLoading: Boolean,
}


const PrivateRoute = (props: Props) => {

    const { auth, isLoading } = props;

    useEffect(() => {
        console.log('Hola')
    }, [])

    return (
        < >
            {
                (isLoading)
                    ? <></>
                    :
                    <>{(auth) ? <Outlet /> : <Navigate to={'/auth/login'} />}</>
            }
        </>
    )
}

export default PrivateRoute;