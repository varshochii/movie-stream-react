import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './home/HomePage'
import Footer from './components/footer/Footer';
import SinglePAge from './components/watch/SinglePAge';





const App = () => {
  return (
    <>
      <BrowserRouter>
           <Header />
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/singlePage/:id" element={<SinglePAge />}></Route>
            </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
