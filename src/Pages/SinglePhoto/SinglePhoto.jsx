import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { instance } from "../../http/http"

const SinglePhoto = () => {
  const [photo, setPhoto] = useState({})
  const params = useParams()
  const router = useHistory()
  useEffect(() => {
    getPhoto()
  }, [])

  async function getPhoto() {
    const respons = await instance.get(`photos/${params.id}`)
    setPhoto(respons.data)
  }

  return (
     <div>
          {photo.title}
      <div>
      <div>
          {<img src={photo.url} />}
      </div>
          <button onClick={() => router.push('/')}> back</button>
      </div>
    </div>
  )
}
export default SinglePhoto