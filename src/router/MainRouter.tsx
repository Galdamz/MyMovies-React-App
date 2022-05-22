import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/Global/Navigation/NavBar';
import { AuthContext } from '../context/AuthContex';
import LoginView from '../views/Auth/LoginView';
import DetailsView from '../views/Details/DetailsView';
import FavoriteView from '../views/Favorite/FavoriteView';
import HomeView from '../views/Home/HomeView';
import NotFound from '../views/NotFound/NotFound';
import SearchView from '../views/Search/SearchView';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const MainRouter = () => {

    const { auth, updateToken, isLoading } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute auth={auth || false} isLoading={isLoading} />}>
                    <Route index element={<HomeView />} />
                    <Route path='/movie/:id' element={<DetailsView />} />
                    <Route path='/search' element={<SearchView />} />
                    <Route path='/favorites' element={<FavoriteView />} />
                </Route>
                <Route element={<PublicRoute auth={auth || false} isLoading={isLoading} />}>
                    <Route path='/auth/login' element={<LoginView />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;