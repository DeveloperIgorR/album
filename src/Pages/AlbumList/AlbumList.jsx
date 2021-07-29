import React from 'react'
import { NavLink } from 'react-router-dom'
import l from './AlbumList.module.css'

const AlbumList = (props) => {

    return (
        <div>
            
            <div className={l.list}>

                {props.files.map(discription =>
                    <div className={l.images}>
                        <p>
                            <li>{discription.title}</li>
                            <li>{discription.date}</li>
                            <li>{discription.author}</li>
                            <NavLink to={'/photos/' + discription.albumId}><img src={discription.url} /></NavLink>
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}
export default AlbumList