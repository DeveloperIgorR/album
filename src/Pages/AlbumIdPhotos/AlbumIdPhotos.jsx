import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { instance } from '../../http/http'
import a from './AlbumIdPhotos.module.css'

const AlbumIdPhotos = () => {
    const [albumsId, setAlbumsId] = useState([])
    useEffect(() => {
        getAlbumsId()
    }, [])
    const router = useHistory()

    async function getAlbumsId() {
        const respons = await instance.get('albums/')
        setAlbumsId(respons.data)
    }

    return (
        <div>
            <h2>Список альбомов </h2>
            {albumsId.map((album) => {
                return (
                    <div className={a.album} >
                        <span ><h3>{album.title}</h3></span><button onClick={() => router.push(`/albums/${album.id}`)}>Открыть</button>
                    </div>
                )
            })}
        </div>
    )
}
export default AlbumIdPhotos