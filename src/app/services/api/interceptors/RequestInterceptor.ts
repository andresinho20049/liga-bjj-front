import { InternalAxiosRequestConfig } from "axios";


export const requestInterceptor = (req:InternalAxiosRequestConfig) => {
    //Caso precisa adionar headers em requisições especificas, 
    //ou precisar de alguma forma rastrear a requisição, add code aqui.
    return req;
}