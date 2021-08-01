import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Album from '../src/Pages/album/Album'
import './App.css'
import SinglePhoto from '../src/Pages/SinglePhoto/SinglePhoto'
import AlbumIdPhotos from './Pages/AlbumIdPhotos/AlbumIdPhotos'

const App = ()=>{
  
  return (
   <BrowserRouter>
    <div className='wrapper' >
     <Route path={'/'} exact render =  {() => <AlbumIdPhotos/>}/>
     <Route path={'/albums/:id'} exact render =  {() => <Album/>}/>
    </div>
    <div >
      <Route path={'/photos/:id'} exact render = {()=><SinglePhoto/>}/>      
    </div>
    
    </BrowserRouter>
  )
}

export default App
