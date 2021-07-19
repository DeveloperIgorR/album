import React, { useState } from 'react'
import f from './AlbumForm.module.css'
const AlbumForm = (props)=>{
    const[name,setName] = useState('')
    const[date,setDate] = useState(0)
    const[author,setAuthor] = useState('')
    let addData = ()=>{
        let newFile = {
            id:Date.now(),name:name,date:date,author:author
        }
        props.createFiles(newFile)
        setName('')
        setDate('')
        setAuthor('')
    }
    
    return(
        <div className={f.form}>
         <div>
             <input placeholder='название' value={name} onChange={event=>setName(event.target.value)}></input>
         </div>
         <div>
             <input placeholder='дата создания'value={date}onChange={event=>setDate(event.target.value)}></input>
         </div>
         <div>
              <input placeholder='имя автора' value={author} onChange={event=>setAuthor(event.target.value)}></input>
         </div>
         <button onClick={addData}>add discription</button>
        </div>
    )
}
export default AlbumForm