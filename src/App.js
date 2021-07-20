import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Album from './album/Album';
import './App.css';
import SinglePhoto from './SinglePhoto/SinglePhoto';

const App = ()=>{
  return (
   <BrowserRouter>
    <div className='wrapper' >
      <Album/>
    </div>
    <div>
      <Route path={'/photos/:id'} render = {()=><SinglePhoto/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
