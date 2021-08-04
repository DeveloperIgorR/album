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
    const [activePhoto,setActivePhoto] = useState(false)
    const [currentPhoto,setCurrentPhoto] = useState({})
    const [fetch,setFetch] = useState(false)
    const [limit,setLimits] = useState(9)
    const [indexOfPhoto,setIndexOfPhoto] = useState(0)
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
     
    let onPhotoClick = (discription) => {
        setActivePhoto(true)
        setCurrentPhoto(discription)
        setIndexOfPhoto (files.indexOf(discription))
        console.log(indexOfPhoto)
    }

    let clickBack = () => {        
        if(indexOfPhoto===0){setIndexOfPhoto(files.length-1)
              setCurrentPhoto(files[files.length-1])}
        else {setCurrentPhoto(files[indexOfPhoto-1])
              setIndexOfPhoto(indexOfPhoto-1)}
        

    }

    let clickForward = () => {
        if(indexOfPhoto===files.length-1){setIndexOfPhoto(0)
            setCurrentPhoto(files[0])}
        else {setCurrentPhoto(files[indexOfPhoto+1])
              setIndexOfPhoto(indexOfPhoto+1)}
        
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
                
                {fetch === true? <Loader/>: <AlbumList setLimit={setLimit} files={files}
                                            setActivePhoto={setActivePhoto} onPhotoClick={onPhotoClick}/>}
            </div>
            <Modal active={activePhoto } setActive={setActivePhoto}>
                <img src={currentPhoto.url}/>
                <div>
                    <button onClick={clickBack}>back</button> <button onClick={clickForward}>forward</button>
                </div>
                
            </Modal>

        </div>
    )
}
export default Album