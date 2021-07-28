import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Album1 from './album1/Album1'
import './App.css'
import SinglePhoto from '../src/Pages/SinglePhoto/SinglePhoto'

const App = ()=>{
  
  return (
   <BrowserRouter>
    <div className='wrapper' >
     <Route path={'/'} exact render =  {()=><Album1/>}/>
    </div>
    <div className='wrapper_single'>
      <Route path={'/photos/:id'} exact render = {()=><SinglePhoto/>}/>
    </div>
    
    </BrowserRouter>
  )
}

export default App
