import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const fetchMovies = axios.create({
    baseURL: import.meta.env.VITE_API_MOVIE_URL,
    headers: {
    }
});

fetchMovies.interceptors.request.use((config) => {
    NProgress.start();
    return config;
}, (Error) => {
    NProgress.done();
    return Promise.reject(Error);
})

fetchMovies.interceptors.response.use((config) => {
    NProgress.done();
    return config;
}, (Error) => {
    NProgress.done();
    return Promise.reject(Error);
})

export const getPopularMovies = async () => {
    const { data } = await fetchMovies.get(`movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`);
    return data;
}

export default fetchMovies;