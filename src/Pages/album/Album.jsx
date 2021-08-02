import React, { useEffect, useState } from 'react'
import AlbumForm from '../../Components/AlbumForm/AlbumForm'
import AlbumList from '../../Components/AlbumList/AlbumList'
import { instance } from '../../http/http'
import l from '../../Components/AlbumList/AlbumList.module.css'
import b from './Album.module.css'
import Modal from '../../Components/Modal'
import { useParams } from 'react-router-dom'
import Pagination from '../../Components/Pagination/Pagination'
import Loader from '../../Components/Loader/Loader'


const Album = () => {
    const [files, setFiles] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [active, setActive] = useState(false)
    const [fetch,setFetch] = useState(false)
    const [limit,setLimits] = useState(9)
    const params = useParams()
    
    useEffect(() => {
        getNewPhotos()
    }, [limit])


    async function getNewPhotos(id) {
        setFetch(true)
        const respons = await instance.get(`photos?albumId=${params.id}&_page=${id}&_limit=${limit}`)
        setFiles(respons.data)
        setTotalCount(respons.headers['x-total-count'])
        setFetch(false)
    }

    let setLimit = (id) => {
        setPageNumber(id)
        getNewPhotos(id)
    }

    function createFiles(newFile) {
        setFiles([...files, newFile])

    }    
    let options = [5,10,15,20,25]
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
                    <div className={b.select} >                       
                           <Pagination setLimit={setLimit} pageNumber={pageNumber}
                                totalCount={totalCount} limit={limit}/>                                 
                       <select onChange={event => setLimits(event.target.value)}>
                            <option selected disabled>количество фотографий</option>
                            {options.map((i) => {
                               return <option value={i}>{i}  фотографий</option>
                            })}
                            
                       </select>
                    </div>
                </div>
                
                {fetch === true? <Loader/>: <AlbumList setLimit={setLimit} files={files}/>}
            </div>

        </div>
    )
}
export default Album