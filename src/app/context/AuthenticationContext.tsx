import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import usePersistedState from "../hooks/UsePersistedState";
import { IPayloadData, IUserLogin } from "../interface";
import { AuthService, UserService } from "../services";
import { useAppThemeContext } from "./AppThemeContext";

interface IAuthenticationData {
    isAuthenticated: boolean;
    login: (login: IUserLogin) => Promise<Error | void>;
    logout: () => void;
    userLogged: IPayloadData | null
}

export const AuthenticationContext = createContext({} as IAuthenticationData);

export const useAuthenticationContext = () => {
    return useContext(AuthenticationContext);
}

interface IAuthenticationProviderProps {
    children: ReactNode
}

export const AuthenticationProvider = ({ children }: IAuthenticationProviderProps) => {
    const [token, setToken] = usePersistedState<string | null>('auth', null);
    const [userLogged, setUserLogged] = useState<IPayloadData | null>(null);

    const { setThemeName } = useAppThemeContext();

    const handleLogin = useCallback(async (login: IUserLogin):Promise<void | Error> => {

        try {
            const accessToken = await AuthService.auth(login);
            setToken(accessToken);

        } catch (error: any) {
            return new Error(error?.message || "Login Invalido!");
        }

    }, [])

    const handleLogout = useCallback(() => {
        UserService.logout();
        setToken(null);
    }, []);

    useMemo(() => {
        const payload = AuthService.parseToken(token);
        setUserLogged(payload);
    }, [token]);

    const isAuthenticated = useMemo(() => {

        setThemeName(userLogged?.belt || null);

        return !!userLogged && Date.now() < userLogged?.exp * 1000;
    }, [userLogged]);

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout, userLogged }}>
            {children}
        </AuthenticationContext.Provider>
    )
}