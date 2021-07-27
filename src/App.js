import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Album from './album/Album'
import './App.css'
import SinglePhoto from './SinglePhoto/SinglePhoto'
import Modal from './utils/Modal'

const App = ()=>{
  
  return (
   <BrowserRouter>
    <div className='wrapper' >
     <Route path={'/'} exact render =  {()=><Album/>}/>
    </div>
    <div className='wrapper_single'>
      <Route path={'/photos/:id'} exact render = {()=><SinglePhoto/>}/>
    </div>
    
    </BrowserRouter>
  )
}

export default App
