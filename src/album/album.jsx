import React, { useEffect, useState } from 'react'
import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'

const Album = () => {
    const [files, setFiles] = useState([])
    const [page,setPage] = useState(1)
    const limit = 9
    useEffect(()=>{
        getNewPortion(page,limit)
    },[])
  
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