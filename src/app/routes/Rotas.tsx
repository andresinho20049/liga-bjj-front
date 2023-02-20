import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages";
import { Layout } from "../components";
import { useAuthenticationContext } from "../context/AuthenticationContext";

interface IPagesData {
    to: string
    label: string
    element: JSX.Element
    onClick?: () => void
}

export const pages: IPagesData[] = [
    {
        label: 'Home',
        to: '/',
        element: <Home />
    },
    {
        label: 'Page 2',
        to: '/page2',
        element: <Home />
    },
    {
        label: 'Page3',
        to: '/page3',
        element: <Home />
    }
]
export const Rotas = () => {

    const { isAuthenticated } = useAuthenticationContext();


    if(!isAuthenticated)
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        )

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {pages.map((page) => (
                        <Route key={page.to} path={page.to} element={page.element} />
                    ))}

                    <Route path="*" element={<Navigate to='/' />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}