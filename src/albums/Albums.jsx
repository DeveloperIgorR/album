import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { instance } from "../http/http"

const Albums = () => {

    const [album, setAlbum] = useState([])
    const params = useParams()
    const router = useHistory()
    useEffect(() => {
        getAlbum()
    }, [])

    async function getAlbum() {
        const respons = await instance.get(`photos?${params.albumId}`)
        setAlbum(respons.data)
                
    }  
  console.log(album.albumId)
    return (
        <div>
           <h2>Album N {album.albumId}</h2>
           
            {album.map(images => {
                return  (
                    <div>                      
                      <img  src={images.url}/>                    
                   </div>
                )
            })}
            <div>
              <button onClick={() => router.push('/')}> back</button>
            </div>
            
        </div>
    )
}
export default Albums