import React, { useEffect, useState } from "react"
import { instance } from "../http/http"

const Albums = () => {

    const [album, setAlbum] = useState([])
    
    useEffect(() => {
        getAlbum()
    }, [])

    async function getAlbum() {
        const respons = await instance.get('photos')
        setAlbum(respons.data)
    }

    return (
        <div>
            {album.map(params => {
                return <div>{params.albumId}</div>
            })}
        </div>
    )
}
export default Albums