import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { instance } from '../http/http'
import l from './AlbumList.module.css'

const AlbumList = (props) => {
 const [newPortion,setNewPortion] = useState([])
 
 let page = 1
 const limit = 9
  async function getNewPhotos(page,limit){
    const respons = await instance.get(`photos?_page=${page}_&_limit=${limit}`)
    setNewPortion(respons.data)
} 
let getPortion = ()=>{
    getNewPhotos()
    props.getNewPortion(newPortion)
}
    return (
        <div>
            <div className={l.pagination}>
                <h2> Альбом с фотографиями</h2>
                <button id ='1' onClick={getPortion}>1</button>
                <button id ='2' onClick={getPortion}>2 </button>
                <button id ='3' onClick={getPortion}>3</button>
                <button id ='4' onClick={getPortion}>4</button>
                <button id ='5' onClick={getPortion}>5</button>
            </div>

            <div className={l.list}>

                {props.files.map(discription =>
                    <div className={l.images}>
                        <p>
                            <li>{discription.title}</li>
                            <li>{discription.date}</li>
                            <li>{discription.author}</li>
                            <NavLink to={'/photos/' + discription.id}><img src={discription.url} /></NavLink>
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}
export default AlbumList