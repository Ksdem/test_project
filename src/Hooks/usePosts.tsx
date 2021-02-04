import axios from "axios";
import {useState} from "react";
import useLoading from "./useLoading";
import useUsers from "./useUsers";

export type IPost ={
    userId: number,
    id: number,
    title: string,
    body: string
}



const usePosts = () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([] as IPost[])
    const {setLoading, setError, error, isLoading} = useLoading();

    const getPosts = async () => {
        try {
            setLoading(true)
            const posts = await axios.get(endpoint);
            setPosts(posts.data)
            setError('')
        }
        catch (e) {
            setError(e)
        }
        finally {
            setLoading(false)
        }


    }

    return {
        getPosts, isLoading,
        posts,
        error
    }
}


export default usePosts;
