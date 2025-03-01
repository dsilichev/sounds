import React from 'react';

export function App() {

  return (
    <div className="app">
      <div className='background'></div>
      <div className="content">

        <h1>Weather sounds</h1>
        <div className='sounds-panel'>
          <a href='#' className='summer'></a>
          <a href='#' className='rain'></a>
          <a href='#' className='winter'></a>
        </div>
        <div className='volume-control'>
          <input type='range' min='0' max='100' step='1' value='50'></input>
        </div>

      </div>
    </div>
  )
}