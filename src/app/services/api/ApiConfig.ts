import axios from 'axios'
import { errorInterceptor, requestInterceptor, responseInterceptor } from './interceptors';


export const configBase = {
    baseURL: process.env.REACT_APP_BASE_URL
};

const ApiForm = axios.create(configBase);

ApiForm.interceptors.response.use(
    (res) => responseInterceptor(res),
    (error) => errorInterceptor(error)
)

ApiForm.interceptors.request.use(
    (req) => requestInterceptor(req)
)

export { 
    ApiForm
};