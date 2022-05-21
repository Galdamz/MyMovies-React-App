import axios from 'axios';

const fetchAuth = axios.create({
    baseURL: import.meta.env.VITE_API_AUTH_URL
});

export default fetchAuth;