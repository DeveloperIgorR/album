import React from 'react'
import l from './AlbumList.module.css'

const AlbumList = (props)=>{
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