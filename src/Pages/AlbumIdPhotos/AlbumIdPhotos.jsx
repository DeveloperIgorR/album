import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { instance } from '../../http/http'
import a from './AlbumIdPhotos.module.css'
import Pagination from '../../Components/Pagination/Pagination'
import Loader from '../../Components/Loader/Loader'

const AlbumIdPhotos = () => {
    const [albumsId, setAlbumsId] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [fetch,setFetch] = useState(false)
    const totalCount = 100
    const limit = 5
    useEffect(() => {
        getAlbumsId()
    }, [])
    const router = useHistory()

    async function getAlbumsId(id) {
        setFetch(true)
        const respons = await instance.get(`albums?_page=${id}&_limit=${limit}`)
        setAlbumsId(respons.data)
        setFetch(false)
    }
 
    let setLimit = (id) => {
        setPageNumber(id)
        getAlbumsId(id)
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
            
            <div className={a.pagination} >
                {fetch === true? <Loader/>: <Pagination setLimit={setLimit} pageNumber={pageNumber}
                 totalCount={totalCount} limit={limit}/>}
            </div>
        </div>
    )
}
export default AlbumIdPhotos