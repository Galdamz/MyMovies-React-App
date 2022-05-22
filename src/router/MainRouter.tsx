import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/Global/Navigation/NavBar';
import LoginView from '../views/Auth/LoginView';
import DetailsView from '../views/Details/DetailsView';
import HomeView from '../views/Home/HomeView';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />} >
                    <Route index element={<HomeView />} />
                    <Route path='/movie/:id' element={<DetailsView />} />
                    <Route path='*' element={<Navigate to={'/'} replace={true} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;