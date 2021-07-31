import React, { useEffect, useState } from 'react'
import { instance } from '../../http/http'
import a from './AlbumIdPhotos.module.css'

const AlbumIdPhotos = () => {
    const [albumId, setAlbumId] = useState([])
    useEffect(() => {
        getAlbumId()
    }, [])

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
                        <span ><h3>{name.title}</h3></span><button>Открыть</button>
                    </div>
                )
            })}
        </div>
    )
}
export default AlbumIdPhotos