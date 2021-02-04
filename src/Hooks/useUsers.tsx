import axios from "axios";
import {useState} from "react";
import useLoading from "./useLoading";


export type IGeo = {
    lat: string,
    lng: string

}
export type ICompany = {
    name: string,
    catchPhrase: string,
    bs: string
}
export type IAddress = {
    street: string;
    suite: string;
    city: string,
    zipcode: string,
    geo: IGeo
}

export type IUser = {
    id: number;
    username: string;
    name: string;
    email: string;
    address: IAddress;
    phone: string,
    website: string,
    company: ICompany
}

const useUsers = () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState([] as IUser[])
    const {setLoading, setError, error, isLoading} = useLoading();
    const getUsers = async () => {
        try {
            setLoading(true)
            const users = await axios.get(endpoint);
            setUsers(users.data)
            setError('')
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }


    }

    return {
        getUsers, isLoading,
        users,
        error
    }
}


export default useUsers;
