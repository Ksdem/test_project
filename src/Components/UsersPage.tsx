import React, {useEffect, useState} from "react";
import useUsers, {IUser} from "../Hooks/useUsers";

const UsersPage = () => {
    const {getUsers, users, isLoading, error} = useUsers();


    useEffect(() => {
        getUsers()
    }, [])

    if (isLoading) {
        return <div className="loading">Загрузка...</div>
    }

    if (error) {
        return <div className="error">Ошибка!!!! {error}</div>
    }

    return (
        <div className="users-page">
            {users.map((user: IUser, index) => {
                return (
                    <div className="user">{user.name}</div>


                )
            })}
        </div>);
}
export default UsersPage;