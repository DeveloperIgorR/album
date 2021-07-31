import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { instance } from '../../http/http'
import a from './AlbumIdPhotos.module.css'

const AlbumIdPhotos = () => {
    const [albumId, setAlbumId] = useState([])
    useEffect(() => {
        getAlbumId()
    }, [])
    const router = useHistory()

    async function getAlbumId() {
        const respons = await instance.get('albums/')
        setAlbumId(respons.data)
    }

    return (
        <div>
            <h2>Список альбомов </h2>
            {albumId.map((name) => {
                return (
                    <div className={a.album} >
                        <span ><h3>{name.title}</h3></span><button onClick={() => router.push('/album/albumId')}>Открыть</button>
                    </div>
                )
            })}
        </div>
    )
}
export default AlbumIdPhotos