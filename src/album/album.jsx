import React, { useEffect, useState } from 'react'
import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'
import {instance} from '../http/http'

const Album = () => {
    const [files, setFiles] = useState([])
    const [page,setPage] = useState(1)
    const limit = 9
    useEffect(()=>{
        getPhotos(page,limit)
    },[])

    async function getPhotos(page,limit){
         const respons = await instance.get(`photos?_page=${page}_&_limit=${limit}`)
         setFiles(respons.data)
    } 
   
    function createFiles (newFile)  {
      setFiles([...files,newFile])
        
    }
    
    function getNewPortion (newPortion){
       setFiles([...files,newPortion])
    }
    return (
        <div>
            <div>
                <AlbumForm createFiles={createFiles} />
                <AlbumList getNewPortion={getNewPortion} files={files}/>
            </div>
            
        </div>
    )
}
export default Album