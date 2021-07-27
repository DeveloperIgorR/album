import React, { useState } from 'react'
import Modal from '../utils/Modal'
import f from './AlbumForm.module.css'

const AlbumForm = (props) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const [file, setFile] = useState([])
    const [active, setActive] = useState(false)

    let addData = () => {
        let newFile = {
            id: Date.now(),
            title: name,
            date: date,
            author: author,
            url: file
        }
        props.createFiles(newFile)
        setName('')
        setDate('')
        setAuthor('')
    }

    let addChange = (event) => {
        let url = URL.createObjectURL(event.target.files[0])
        setFile(url)
    }

    return (

        <div className={f.form}>

            <Modal active={active} setActive={setActive}>
                <div>
                    <input placeholder='название' value={name} onChange={event => setName(event.target.value)}></input>
                </div>
                <div>
                    <input placeholder='дата создания' value={date} onChange={event => setDate(event.target.value)}></input>
                </div>
                <div>
                    <input placeholder='имя автора' value={author} onChange={event => setAuthor(event.target.value)}></input>
                </div>
                <div>
                    <input type='file' onChange={addChange}></input>
                </div>
                <button onClick={addData}>add discription</button>
            </Modal>
            
            <button onClick={()=>setActive(true)}>Введите данные</button>
        </div>
    )
}
export default AlbumForm