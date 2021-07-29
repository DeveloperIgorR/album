import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Album from './album/Album'
import Albums from './albums/Albums'
import './App.css'
import SinglePhoto from '../src/Pages/SinglePhoto/SinglePhoto'

const App = ()=>{
  
  return (
   <BrowserRouter>
    <div className='wrapper' >
     <Route path={'/'} exact render =  {() => <Album/>}/>
    </div>
    <div className='wrapper_single'>
      {/* <Route path={'/photos/: id'} exact render = {()=><SinglePhoto/>}/> */}
      <Route path={'/photos/: albumId'} exact render = {() => <Albums/>}/>
    </div>
    
    </BrowserRouter>
  )
}

export default App
