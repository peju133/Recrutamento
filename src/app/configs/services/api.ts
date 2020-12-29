import axios from 'axios';
import  * as app from './config.json';

const api = axios.create({
    baseURL:app.api,
    responseType:"json",
});

export default api;


