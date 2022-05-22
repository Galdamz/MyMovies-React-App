import { useEffect, useContext, useLayoutEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex';
import { Auth } from '../../types/types';

interface Props {
    auth: Auth,
    isLoading: Boolean,
}

const PublicRoute = (props: Props) => {

    const { auth, isLoading } = props;

    useEffect(() => {
    }, [])

    return (
        < >
            {
                (isLoading)
                    ? <></>
                    :
                    <>{(!auth) ? <Outlet /> : <Navigate to={'/'} />}</>
            }
        </>
    )
}

export default PublicRoute;