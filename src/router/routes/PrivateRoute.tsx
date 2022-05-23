import { useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = () => {

    const { authToken, isLoading } = useContext(AuthContext)

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