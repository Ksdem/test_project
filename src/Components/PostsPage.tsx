import React, {useEffect} from "react";
import usePosts, {IPost} from "../Hooks/usePosts";
import useUsers from "../Hooks/useUsers";
import PostItem from "./PostItem";


const PostsPage = () => {
    const {getPosts, posts, isLoading, error} = usePosts();
    const {getUsers, users, isLoading: isUsersLoading, error: isUsersError} = useUsers();


    useEffect(() => {
        getPosts();
        getUsers();
    }, [])

    if (isLoading || isUsersLoading) {
        return <div className="loading">Загрузка...</div>
    }

    if (error || isUsersError) {
        return <div className="error">Ошибка!!!! {error || isUsersError}</div>
    }

    const getUser = (id: number) => {
        return users.find(x => x.id === id);
    }

    return (
        <div className="posts-page">
            {posts.map((post: IPost, index: number) => {
                return (
                    <PostItem key={index} post={post} onGetUser={getUser}/>
                )
            })}
        </div>);
}

export default PostsPage;