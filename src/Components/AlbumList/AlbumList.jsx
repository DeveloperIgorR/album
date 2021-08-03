import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import l from './AlbumList.module.css'

const AlbumList = (props) => {

const [currentPhoto,setCurrentPhoto] = useState('')

let setPhotosUrl = ({ target: { value } }) => {
    setCurrentPhoto(value)
    props.setActivePhoto(true)
    props.showPhoto(currentPhoto)
}

    return (
        <div>
            
            <div className={l.list}>

                {props.files.map(discription =>
                    <div className={l.images}>
                        <p>
                            <li>{discription.title}</li>
                            <li>{discription.date}</li>
                            <li>{discription.author}</li>
                            <img value={discription.url} src={discription.url} onClick={setPhotosUrl}/>
                            {/* <NavLink to={'/photos/' + discription.id}><img src={discription.url} /></NavLink> */}
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}
export default AlbumList