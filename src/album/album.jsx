import React, { useEffect, useState } from 'react'

import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'
const Album = () => {
    const [files, setFiles] = useState([])
    useEffect(createFiles,[])
    
    function createFiles (newFile)  {
       return setFiles([...files,newFile])
        
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