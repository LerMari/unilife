import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Hompage/Homepage';
import coverImg from './assets/cover-img.png'
import Footer from './Components/Footer/Footer';
import Social from './Components/Social/Social';
import AllCities from './pages/AllCities/AllCities';
import HomeDetails from './pages/HomeDetails/HomeDetails';
import CityDetails from './pages/CityDetails/CityDetails';
import PropertyCard from './Components/PropertyCard/PropertyCard';


function App() {

  // const imgSrc = {coverImg}

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
       <Route path='/' element={<Homepage imgSrc={coverImg}/>} />
       <Route path='/allcities' element={<AllCities />} />
       <Route path='/homedetails/:propertyId' element={<HomeDetails />} />
       <Route path='/citydetails/:cityId' element={<CityDetails />} />
       </Routes>
      </BrowserRouter>
      <Social />
      <Footer />
    </div>
  )
  }

export default App;
