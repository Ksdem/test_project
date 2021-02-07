import axios from "axios";
import {useState} from "react";
import useLoading from "./useLoading";


export type IAlbum = {
    userId: number,
    id: number,
    title: string
}


const useAlbum = () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/albums';
    const [album, setAlbum] = useState([] as IAlbum[])
    const {setLoading, setError, error, isLoading} = useLoading();

    const getAlbums = async () => {
        try {
            setLoading(true)
            const album = await axios.get(endpoint);
            setAlbum(album.data)
            setError('')
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }


    }

    return {
        getAlbums, isLoading,
        album,
        error
    }
}


export default useAlbum;
