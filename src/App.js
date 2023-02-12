
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setDate] = useState({
    slip: {
      advice: "",
      id: ""
    }
  });

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(responsev => responsev.json())
      .then(responsev => setDate({ ...responsev }))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="container">
      <div className="box">
        <p>ADVICE #{data.slip.id}</p>
        <h3>{data.slip.advice}</h3>
        <div className="lines">
          <span className="line"></span>
          <div className="douts">
            <span></span>
            <span></span>
          </div>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
