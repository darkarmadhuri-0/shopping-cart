import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes , Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { HelpCenter } from './pages/HelpCenter';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import {RecoilRoot} from 'recoil'
import BuyNow from './components/BuyNow';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandler from './components/ErrorHandler';

function App() {

  
  return (
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
    <ShoppingCartProvider>
      <Navbar/>
    
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>    {/*home component is rendered} */}
        <Route path='/store' element={<Store/>}></Route>       
        <Route path='/about' element={<HelpCenter/>}></Route>
        <Route path='/components/BuyNow' element={<BuyNow/>}></Route>
      </Routes>
   
    </ShoppingCartProvider>
    </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
