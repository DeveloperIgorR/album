import React, { useEffect, useState } from "react"
import { instance } from "../http/http"

const Album1 = () => {
    const[files,setFiles] = useState([])
    const limit = 50 
    useEffect(() => {
        getAlbum ()
    },[])

    async function getAlbum (userId){
        const respons = await instance.get(`albums?_page=${userId}&_limit=${limit}`)
        setFiles(respons.data)
        
    }

    return(
        
        <div>
            <div>
                <button onClick={}>Получить альбом</button>
            </div>
          {files.map( objects => { 
             return(
             <div key={objects.id}>
                 {objects.title}
             </div> 
             ) 
          })}
        </div>
    )
}
export default Album1