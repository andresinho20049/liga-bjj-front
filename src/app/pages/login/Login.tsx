
import * as yup from "yup";
import { IUserLogin } from "../../services";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useRef, useState } from "react";
import { useAuthenticationContext, useSnackBarContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, CircularProgress, Container, CssBaseline, Link, TextField, Tooltip, Typography } from "@mui/material";
import { VTextField } from "../../components/forms/VTextField";
import { SnackBarApp } from "../../components";

export const Login = () => {

    const formValidSchema: yup.SchemaOf<IUserLogin> = yup.object().shape({
        username: yup.string().required().email(),
        password: yup.string().required()
    })
    const formRef = useRef<FormHandles>(null);

    const { showMsg } = useSnackBarContext();
    const { login } = useAuthenticationContext();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = useCallback((dados: IUserLogin) => {
        setIsLoading(true);

        formValidSchema
            .validate(dados, { abortEarly: false })
            .then((dadosValid: IUserLogin) => {

                login(dadosValid)
                    .then(res => {

                        if(res instanceof Error){
                            console.error(res.message);
                            showMsg("Login Invalido");
                        } else {
                            navigate('/dashboard');
                        }
                        setIsLoading(false);
                    })
            })
            .catch((errors: yup.ValidationError) => {
                setIsLoading(false);
                const validationErrors: { [key: string]: string } = {}

                errors.inner.forEach((error: any) => {
                    if (!error.path || validationErrors[error.path]) return;

                    validationErrors[error.path] = error.message
                });
                formRef.current?.setErrors(validationErrors);
            })

    }, [])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography variant="h5">
                    Login
                </Typography>
                <Form ref={formRef} onSubmit={handleLogin}>
                    <VTextField
                        autoFocus
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="username"
                        variant="standard"
                        disabled={isLoading}
                    />
                    <VTextField
                        fullWidth
                        sx={{ mt: 1 }}
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        disabled={isLoading}
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={isLoading}
                        sx={{ mt: 3, mb: 2 }}
                        endIcon={isLoading ? <CircularProgress variant="indeterminate" size={22} /> : undefined}
                    >
                        Logar
                    </Button>
                    <Box display="flex" justifyContent="flex-end">

                        <Tooltip
                            title={`
                            Mais informações podem ser encontradas no README do github
                        `}
                            children={<Link target="_blank" color="error" href="https://github.com/andresinho20049/liga-bjj-front" variant="body2">
                                Help
                            </Link>}
                        />
                    </Box>
                </Form>
            </Box>
            <SnackBarApp/>
        </Container>
    )
}