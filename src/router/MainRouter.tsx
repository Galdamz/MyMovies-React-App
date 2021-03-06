import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginView from '../views/Auth/LoginView';
import DetailsView from '../views/Details/DetailsView';
import FavoriteView from '../views/Favorite/FavoriteView';
import HomeView from '../views/Home/HomeView';
import NotFound from '../views/NotFound/NotFound';
import SearchView from '../views/Search/SearchView';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const MainRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route index element={<HomeView />} />
                    <Route path='/movie/:id' element={<DetailsView />} />
                    <Route path='/search' element={<SearchView />} />
                    <Route path='/favorites' element={<FavoriteView />} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path='/auth/login' element={<LoginView />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;