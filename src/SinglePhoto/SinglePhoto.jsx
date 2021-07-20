import React,{ useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { instance } from "../http/http"

const SinglePhoto = ()=>{
    const[photo,setPhoto] = useState({})
    const params = useParams()
    useEffect(()=>{
        getPhoto()
    },[])

    async function getPhoto (){
      const respons = await instance.get('photos/'+ params.id)
      setPhoto(respons.data)
    }

    return(
        <div>
          {<img src={photo.url}/>}
          <button></button>
        </div>
    )
}
export default SinglePhoto