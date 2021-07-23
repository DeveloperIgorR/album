import React, { useEffect, useState } from 'react'
import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'
import { instance } from '../http/http'
import l from '../AlbumList/AlbumList.module.css'

const Album = () => {
    const [files, setFiles] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const limit = 9
    useEffect(() => {
        getNewPhotos()
    }, [])
    

    async function getNewPhotos() {
        const respons = await instance.get(`photos?_page=${pageNumber}&_limit=${limit}`)
        setFiles(respons.data)
    }

    let setPortion = (id) => {
        setPageNumber(id)
        getNewPhotos()
    }

    function createFiles(newFile) {
        setFiles([...files, newFile])

    }

    const arr = [1,2,3,4,5]
    return (
        <div>
            <div>
                <AlbumForm createFiles={createFiles} />
                <div className={l.pagination}>
                    <h2> Альбом с фотографиями</h2>
                    {arr.map((id) => <button id={arr.index + 1} onClick={(id) =>setPortion(id)} >{id}</button>)}
                </div>
                <AlbumList setPortion={setPortion} files={files} />
            </div>

        </div>
    )
}
export default Album