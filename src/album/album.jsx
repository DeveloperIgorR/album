import React, { useEffect, useState } from 'react'
import AlbumForm from '../Pages/AlbumForm/AlbumForm'
import AlbumList from '../Pages/AlbumList/AlbumList'
import { instance } from '../http/http'
import l from '../Pages/AlbumList/AlbumList.module.css'
import b from './Album.module.css'
import createPages from '../utils/Pagination'
import Modal from '../../src/Components/Modal'
import Albums from '../albums/Albums'

const Album = () => {
    const [files, setFiles] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [active, setActive] = useState(false)

    const limit = 9
    useEffect(() => {
        getNewPhotos()
    }, [])


    async function getNewPhotos(id) {
        const respons = await instance.get(`photos?_page=${id}&_limit=${limit}`)
        setFiles(respons.data)
        setTotalCount(respons.headers['x-total-count'])
    }

    let setPortion = (id) => {
        setPageNumber(id)
        getNewPhotos(id)
    }

    function createFiles(newFile) {
        setFiles([...files, newFile])

    }
    
    const totalPages = Math.ceil(totalCount / limit)
    const arr = []
    
    createPages(totalPages,pageNumber,arr)

    return (
        <div>
            <div>
                <Modal active={active} setActive={setActive} >
                    <AlbumForm createFiles={createFiles} setActive={setActive} />
                </Modal>

                <div className={b.form}>
                  <button onClick={() => setActive(true)}>Введите данные</button>
               </div>
        
                <div className={l.pagination}>
                    <h2> Альбом с фотографиями</h2>
                    {arr.map((id) => <button className={pageNumber == id ? b.active : b.none} id={arr.index + 1}
                        onClick={() => setPortion(id)} >{id}</button>)}
                </div>
                
                <AlbumList setPortion={setPortion} files={files} />
            </div>

        </div>
    )
}
export default Album