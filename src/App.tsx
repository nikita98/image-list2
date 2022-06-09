import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImgCatalog from './pages/ImgCatalog'
import PageHeader from './components/PageHeader'

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <PageHeader />
        <Routes>
          <Route path={'/'} element={
            <ImgCatalog />
          } />
          <Route path={'/:favorite'} element={
            <ImgCatalog />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )

}


export default App;
