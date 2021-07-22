import React, { useEffect, useState } from 'react'
import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'
import { instance } from '../http/http'

const Album = () => {
    const [files, setFiles] = useState([])
    const[pageNumber,setPageNumber] = useState(1)
    useEffect(()=>{
        getNewPhotos(pageNumber,limit)
    },[])
    const limit = 9

    async function getNewPhotos(pageNumber,limit){
        const respons = await instance.get(`photos?_page=${pageNumber}&_limit=${limit}`)
        setFiles(respons.data)
    } 
    
    let setPortion = (id)=>{
        setPageNumber(id)
        getNewPhotos(pageNumber,limit)
    }
  
    function createFiles (newFile)  {
      setFiles([...files,newFile])
        
    }    
   
    return (
        <div>
            <div>
                <AlbumForm createFiles={createFiles} />
                <AlbumList setPortion={setPortion} files={files}/>
            </div>
            
        </div>
    )
}
export default Album