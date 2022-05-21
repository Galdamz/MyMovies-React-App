import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/Global/Navigation/NavBar';
import LoginView from '../views/Auth/LoginView';
import HomeView from '../views/Home/HomeView';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />} >
                    <Route path='/' element={<HomeView />} />
                </Route>
                <Route element={<PublicRoute />} >
                    <Route path='/auth/login' element={<LoginView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;