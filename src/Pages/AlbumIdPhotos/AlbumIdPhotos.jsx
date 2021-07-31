import React, { useEffect, useState } from 'react'
import { instance } from '../../http/http'

const AlbumIdPhotos = () => {
    const[albumId,setAlbumId] = useState([])
    useEffect(() => {
        getAlbumId()
    },[])

    async function getAlbumId(){
        const respons = await instance.get('photos/')
        setAlbumId(respons.data)
    }

    return(
        <div>
         <h2>Список альбомов </h2>
        </div>
    )
}
 export default AlbumIdPhotos 