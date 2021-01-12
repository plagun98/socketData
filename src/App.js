import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './App.scss';
import { subscribe } from './api';

const App = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    subscribe((e) => setChartData(e));
  }, []);

  return (
    <div className="App">
      <div className="generalDataWrapper">
        <div className="generalData">
          <span>{`ID: ${chartData[0]?.id}`}</span>
          <span>{`Temp: ${chartData[0]?.temperature} C`}</span>
        </div>
        <div className="generalData">
          <span>{`ID: ${chartData[1]?.id}`}</span>
          <span>{`Temp: ${chartData[1]?.temperature} C`}</span>
        </div>
      </div>
      <div className="chart">
        <div className="column">
          <div 
            className="filled"
            style={{
              height: `${chartData[0]?.data}px`,
              display: chartData[0]?.data > 100 ? 'none' : 'block',
            }}
          />
          <span className="columnId">{chartData[0]?.id}</span>
          <span>{chartData[0]?.data}</span>
        </div>
        <div className="column">
          <div 
            className="filled"
            style={{
              height: `${chartData[1]?.data}px`,
              display: chartData[1]?.data > 100 ? 'none' : 'block',
            }}
          />
          <span className="columnId">{chartData[1]?.id}</span>
          <span>{chartData[1]?.data}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
