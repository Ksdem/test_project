import axios from "axios";
import {useState} from "react";
import useLoading from "./useLoading";


export type IPhotoItem = {
    url: string,
    id: number,
    title: string,
    thumbnailUrl: string
}


const usePhotos = () => {
    const getEndpoint = (id: string) => `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
    const [photos, setPhotos] = useState([] as IPhotoItem[])
    const {setLoading, setError, error, isLoading} = useLoading();

    const getPhotos = async (id: string) => {
        try {
            setLoading(true)
            const albumItem = await axios.get(getEndpoint(id));
            setPhotos(albumItem.data)
            setError('')
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }


    }

    return {
        getPhotos, isLoading,
        photos,
        error
    }
}


export default usePhotos;
