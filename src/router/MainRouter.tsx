import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginView from '../views/Auth/LoginView';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />} >
                    <Route path='/' />
                </Route>
                <Route element={<PublicRoute />} >
                    <Route path='/auth/login' element={<LoginView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;