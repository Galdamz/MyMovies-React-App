import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {

    const { authToken, isLoading } = useAuth();

    return (
        < >
            {
                (isLoading)
                    ? <></>
                    : <>
                        {
                            (authToken) ? <Navigate to={'/'} /> : <Outlet />
                        }
                    </>
            }

        </>
    )
}

export default PrivateRoute;