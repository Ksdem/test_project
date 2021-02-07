import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import useAlbumItem, {IPhotoItem} from "../Hooks/usePhotos";


interface ParamTypes {
    id: string
}

const AlbumItem = () => {
    const {getPhotos, photos, isLoading, error} = useAlbumItem();
    let history = useHistory();
    const {id} = useParams<ParamTypes>();
    useEffect(() => {
        getPhotos(id)
    }, [id])

    if (isLoading) {
        return <div className="loading">Загрузка...</div>
    }

    if (error) {
        return <div className="error">Ошибка!!!! {error}</div>
    }

    return <div className="photos-page">{photos.map((photo: IPhotoItem, index) => {
        return <div className="photo-container">
            <img className={'image'} key={index} src={photo.thumbnailUrl} alt=""/>
            <div className="title">{photo.title}</div>
        </div>
    })}</div>
}


/*const onAlbumItem=()=>{

    }
}




    return(
        <div className="users-item">
            {albumItem.map((album: IAlbumItem, index) => {
                return (
                    <div onClick={() => onAlbumItem(album.id)} className="album">{albumItem.find}</div>


                )
}*/

export default AlbumItem;