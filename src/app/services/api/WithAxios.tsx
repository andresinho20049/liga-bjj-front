import { ApiForm } from './ApiConfig';
import { ReactNode, useEffect, useMemo } from 'react';
import { useAuthenticationContext } from '../../context';

interface IWithAxiosProps {
    children: ReactNode
}

export const WithAxios = ({ children }: IWithAxiosProps) => {

    const { isAuthenticated, token, logout } = useAuthenticationContext();


    useEffect(() => {

        // console.log(isAuthenticated);

        ApiForm.interceptors.request.clear();
        ApiForm.interceptors.response.clear();

        ApiForm.interceptors.response.use(
            (res) => res,
            (error) => {
                if (isAuthenticated && error.response?.status === 401) {
                    console.error('API retornou status 401, usuário será deslogado!');
                    logout();
                }

                return Promise.reject(error);
            }
        )

        ApiForm.interceptors.request.use(
            (req) => {
                //Caso precisa adionar headers em requisições especificas, 
                //ou precisar de alguma forma rastrear a requisição, add code aqui.

                // const token = JSON.parse(localStorage.getItem('auth') || '');
                req.headers.Authorization = `Bearer ${token}`;

                return req;
            }
        )
    }, [isAuthenticated, token]);

    return (
        <>
            {children}
        </>
    );
}