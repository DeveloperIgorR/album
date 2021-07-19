import React, { useEffect, useState } from 'react'
import l from './AlbumList.module.css'
import {instance} from '../http/http'

const AlbumList = (props)=>{
    const[photos,setPhotos] = useState([])
    useEffect(()=>{
        getPhotos()
    },[])

    async function getPhotos(){
         const respons = await instance.get('photos/')
         setPhotos(respons.data)
    }
    
    return(
        <div className={l.list}>

         <h2>Альбом с фотографиями</h2>
         
         {props.files.map(discription=>
             <div>
                 <ul>
                 <li>{discription.title}</li>
                 <li>{discription.date}</li>
                 <li>{discription.author}</li>
                 </ul>
            </div>
         )}
        </div>
    )
}
export default AlbumList