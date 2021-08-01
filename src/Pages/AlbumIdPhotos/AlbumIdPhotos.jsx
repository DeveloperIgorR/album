import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { instance } from '../../http/http'
import createPages from '../../utils/Pagination'
import a from './AlbumIdPhotos.module.css'

const AlbumIdPhotos = () => {
    const [albumsId, setAlbumsId] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const totalCount = 100
    const limit = 5
    useEffect(() => {
        getAlbumsId()
    }, [])
    const router = useHistory()

    async function getAlbumsId(id) {
        const respons = await instance.get(`albums?page=${id}&_limit=${limit}`)
        setAlbumsId(respons.data)
    }
 
    let setAlbums = (id) => {
        setPageNumber(id)
        getAlbumsId(id)
    }

    const totalPages = Math.ceil(totalCount / limit)
    const arr = []

    createPages(totalPages, pageNumber, arr)

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
            <div className={a.pagination} >
                {arr.map((id) => <button className={pageNumber == id ? a.active : a.none} id={arr.index + 1}
                    onClick={() => setAlbums(id)} >{id}</button>)}
            </div>
        </div>
    )
}
export default AlbumIdPhotos