import axios from 'axios'
import { Buffer } from 'buffer';
import { encryptedAES } from '../../hooks/UseCrypto';
import { IPayloadData } from '../../interface';

export interface IUserLogin {
    username: string,
    password: string
}

const auth = async (login: IUserLogin): Promise<string> => {

    try {

        const encryptedPassword = encryptedAES(login.password);
        const encryptedDate = encryptedAES(new Date().toLocaleString('pt-BR'));
        const passwordEncoded = Buffer.from(`${encryptedPassword}|${encryptedDate}`).toString('base64');

        const data = new URLSearchParams({ 'username': login.username });
        data.append('password', passwordEncoded);
        data.append('grant_type', 'password');

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}/oauth/token`,
            withCredentials: true,
            auth: {
                username: process.env.REACT_APP_AUTH_USERNAME || '',
                password: process.env.REACT_APP_AUTH_PASSWORD || ''
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data
        };

        const res = await axios(config);

        return res.data?.access_token;

    } catch (error: any) {
        console.error(error);
        throw error;
    }
}

const parseToken = (token: string | null): IPayloadData | null => {
    try {

        if(token === null)
            return null;
        
        const userLogged: IPayloadData = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        return userLogged;

    } catch (error) {
        return null;
    }
}

export const AuthService = {
    auth,
    parseToken
};