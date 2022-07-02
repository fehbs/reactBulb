import logo from './logo.svg';
import img from '../src/off.jpg';
import image from '../src/on.jpg';

import './App.css';

import { useState } from 'react';

import { BsLightbulb, BsLightbulbOffFill } from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [bulb, setBulb] = useState(
    <img src={img} alt='img' width='20%' />
  );

  function handleOn() {
    setBulb(<img src={image} alt='img' width='20%' />);
    toast.success('🦄 React is very cool!', {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
  }

  function handleOff() {
    setBulb(<img src={img} alt='img' width='20%' />);

    toast.success('🦄 React is very cool!', {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img className="App-logo" src={logo} alt='log' width='12%' />
      </header>
      <p>{bulb}</p>
      <div className='buttons'>
        <button onClick={handleOn}><BsLightbulb size={22} />ON</button>
        <button onClick={handleOff}><BsLightbulbOffFill size={22} />OFF</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App;