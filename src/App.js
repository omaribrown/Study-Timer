import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    let longMin = 25;
    let longSec = longMin * 60;

    let updateCountdown = () => {
      var mins = Math.floor(longSec / 60);
      var secs = longSec % 60;

      longSec--
      console.log(mins, secs)

    }
    let startTimer = () => {
      setInterval(updateCountdown, 1000);
    }



  return (
    <div className="App">
      <div className='header'>
      <h1>Start optomizing your study time.</h1>
      <h2>Use this timer to help you stay focused and give yourself measured and necessary breaks.</h2>
      </div>
      <div className='timers'>
        <h3></h3>
        <button onClick={startTimer}>Start Timer</button>
        <h3>00:00</h3>
        <button>Start Break</button>
      </div>


    
    </div>
  );
}

export default App;
