import React, { useEffect, useState } from 'react'
import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'
import {instance} from '../http/http'

const Album = () => {
    const [files, setFiles] = useState([])
    useEffect(()=>{
        getPhotos()
    },[])

    async function getPhotos(){
         const respons = await instance.get('photos/')
         setFiles(respons.data)
    } 
   
    function createFiles (newFile)  {
      setFiles([...files,newFile])
        
    }
    
    return (
        <div>
            <div>
                <AlbumForm createFiles={createFiles} />
                <AlbumList files={files}/>
            </div>
            
        </div>
    )
}
export default Album