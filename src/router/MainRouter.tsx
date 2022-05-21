import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginView from '../views/Auth/LoginView';
import PrivateRoute from './routes/PrivateRoute';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />} >
                  <Route path='/'/>
                </Route>
                <Route path='/auth/login' element={<LoginView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;