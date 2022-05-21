import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    return (
        < >
            {false ? <Outlet /> : <Navigate to={'/auth/login'} />}
        </>
    )
}

export default PrivateRoute;