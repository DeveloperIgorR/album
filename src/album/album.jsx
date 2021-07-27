import React, { useEffect, useState } from 'react'
import AlbumForm from '../AlbumForm/AlbumForm'
import AlbumList from '../AlbumList/AlbumList'
import { instance } from '../http/http'
import l from '../AlbumList/AlbumList.module.css'
import b from './Album.module.css'

const Album = () => {
    const [files, setFiles] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
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
    function createPages() {
        if (totalPages > 9) {
            if (pageNumber > 4) {
                arr.push(1)
                if (pageNumber >= totalPages - 3) {
                    for (let i = totalPages - 3; i < totalPages; i++) {
                        arr.push(i)
                    }
                } else {
                    for (let i = pageNumber - 3; i <= pageNumber + 3; i++) {
                        arr.push(i)
                    }
                }
            }
            else {
                for (let i = 1; i <= 9; i++) {
                    arr.push(i)

                }
            }
        } else {
            for (let i = 1; i < totalPages; i++) {
                arr.push(i)
            }

        } arr.push(totalPages)
    }
    createPages()

    return (
        <div>
            <div>
                <AlbumForm createFiles={createFiles} />
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