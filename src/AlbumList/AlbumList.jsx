import React from 'react'
import l from './AlbumList.module.css'
const AlbumList = (props)=>{
    return(
        <div className={l.list}>
         <h2>Альбом с фотографиями</h2>
         {props.files.map(discription=><ul>
             <div>{discription.name}</div>
         </ul>)}
        </div>
    )
}
export default AlbumList