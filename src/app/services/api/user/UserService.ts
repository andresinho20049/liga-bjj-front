import { ApiForm } from "../ApiConfig";

export interface IUser {
    id: number;
    name: string,
    email: string,
    password: string,
    belt: ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Purple', 'Brown', 'Black'],
    updatePassword: Boolean,
    roles: IRoles[]
}

interface IRoles {
    name: string
}

const getAll = async (): Promise<IUser[] | Error> => {

    try {
        const { data } = await ApiForm.get('/usuarios');

        return data;
    } catch (error: any) {
        return new Error(error?.message || "Erro ao consultar a API");
    }
};

const getById = async (id: number): Promise<IUser | Error> => {

    try {
        const { data } = await ApiForm.get(`/usuarios/${id}`);

        return data;
    } catch (error: any) {
        return new Error(error?.message || "Erro ao consultar o Registro");
    }
};

const getByUsername = async (username: string): Promise<IUser[] | Error> => {

    try {

        const { data } = await ApiForm.get(`/usuarios?username=${username}`);

        return data;
    } catch (error: any) {
        return new Error(error?.message || "Erro ao consultar o Registro");
    }
};

const create = async (user: Omit<IUser, 'id'>): Promise<IUser | Error> => {

    try {

        const { data } = await ApiForm.post<IUser>(`/usuarios`, user);

        return data;
    } catch (error: any) {
        return new Error(error?.message || "Erro ao criar o Registro");
    }
};

const update = async (user: IUser): Promise<IUser | Error> => {

    try {

        const { data } = await ApiForm.put<IUser>(`/usuarios/${user.id}`, user);

        return data;
    } catch (error: any) {
        return new Error(error?.message || "Erro ao atualizar o Registro");
    }
};

const deleteById = async (id: number): Promise<void | Error> => {

    try {
        await ApiForm.delete(`/usuarios/${id}`);
    } catch (error: any) {
        return new Error(error?.message || "Erro ao deletar o Registro");
    }
};

const logout = async (): Promise<void> => {

    try {

        await ApiForm.post(`/oauth/revoke-token`);

    } catch (error: any) {
        console.error(error?.message || "Token não pode ser revogado com sucesso e/ou não informado.");
    }
};

export const UserService = {
    getAll,
    create,
    getById,
    getByUsername,
    update,
    deleteById,
    logout
};