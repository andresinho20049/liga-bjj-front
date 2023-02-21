import { InternalAxiosRequestConfig } from "axios";


export const requestInterceptor = (req:InternalAxiosRequestConfig) => {
    //Caso precisa adionar headers em requisições especificas, 
    //ou precisar de alguma forma rastrear a requisição, add code aqui.

    const token = JSON.parse(localStorage.getItem('auth') || '');
    req.headers.common['Authorization'] = token;

    return req;
}