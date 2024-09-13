import { useState } from 'react';
import './App.css';
import Approutes from './routes';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Approutes />
    </>
  );
}

export default App;
