import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { instance } from '../http/http'
import l from './AlbumList.module.css'

const AlbumList = (props) => {
const[pageNumber,setPageNumber] = useState(1)
const [newPortion,setNewPortion] = useState([])

  const limit = 9
  async function getNewPhotos(pageNumber,limit){
    const respons = await instance.get(`photos?_page=${pageNumber}&_limit=${limit}`)
    setNewPortion(respons.data)
} 

let setPortion = (id)=>{
    setPageNumber(id)
    getNewPhotos(pageNumber,limit)
    props.getNewPortion(newPortion)
}

const arr = [1,2,3,4,5]
    return (
        <div>
            <div className={l.pagination}>
                <h2> Альбом с фотографиями</h2>
                {arr.map((id)=><button id={arr.index+1} onClick={(id)=>setPortion(id)} >{id}</button>)}
               
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