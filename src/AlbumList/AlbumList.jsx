import React from 'react'
import l from './AlbumList.module.css'

const AlbumList = (props)=>{
        
    return(
        <div>
            <h2>Альбом с фотографиями</h2>
        <div className={l.list}>
            
         {props.files.map(discription=>
             <div className={l.images}>
                 <p>
                 <li>{discription.title}</li>
                 <li>{discription.date}</li>
                 <li>{discription.author}</li>
                 <img src={discription.url}/>
                 </p>
            </div>
         )}
        </div>
        </div>
    )
}
export default AlbumList