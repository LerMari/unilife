import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Hompage/Homepage';
import coverImg from './assets/cover-img.png'
import Footer from './Components/Footer/Footer';
import Social from './Components/Social/Social';



function App() {

  // const imgSrc = {coverImg}

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
       <Route path='/' element={<Homepage imgSrc={coverImg}/>} />
       </Routes>
      </BrowserRouter>
      <Social />
      <Footer />
    </div>
  )
  }

export default App;
