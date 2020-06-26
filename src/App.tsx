import './App.css';

import Chart from './components/Chart';
import React from 'react';

const myData1 = [
  { x: 0, y: 10 },
  { x: 1, y: 20 },
  { x: 2, y: 40 },
  { x: 3, y: 20 },
  { x: 4, y: 10 }
];

const myData2 = [
  { x: "USA", y: 193 },
  { x: "Canada", y: 46 },
  { x: "UK", y: 320 },
  { x: "China", y: 341 },
  { x: "South Africa", y: 88 }
];

function App() {
  return (
    <div className="App">
      <div className="chart-holder">
        <Chart data={myData1} />
      </div>
      Also, be sure to fill out{" "}
      <b>
        <i>design_document.txt</i>
      </b>
      .
    </div>
  );
}

export default App;
