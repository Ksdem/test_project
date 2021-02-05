import React, {useEffect} from "react";
import useAlbum, {IAlbum} from "../Hooks/useAlbum";
import {useHistory} from "react-router-dom";


const AlbumPage = () => {
    const {getAlbums, album, isLoading, error} = useAlbum();
    let history = useHistory();


    useEffect(() => {
        getAlbums()
    }, [])

    if (isLoading) {
        return <div className="loading">Загрузка...</div>
    }

    if (error) {
        return <div className="error">Ошибка!!!! {error}</div>
    }
    const onAlbumId = (id: number) => {
        history.push('/album/' + id)
    }


    return (
        <div className="users-page">
            {album.map((album: IAlbum, index) => {
                return (
                    <div onClick={() => onAlbumId(album.id)} className="album">{album.title}</div>


                )
            })}
        </div>);
}
export default AlbumPage;