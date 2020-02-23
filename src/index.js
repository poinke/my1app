import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './nav.js'

function App() {
    const [colorIndex, setColorIndex] = React.useState(0);
    const colors = ["blue", "green", "white", "orange"];
  
    // we are performing a 'side effect' since we are working with an API
    // we are working with the DOM, a browser API outside of React
    useEffect(() => {
      document.body.style.backgroundColor = colors[colorIndex];
    });
    // whenever state is updated, App re-renders and useEffect runs
  
    function handleChangeIndex() {
      const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
      setColorIndex(next);
    }
  
    return (
    <div>
    <Navigation />
    <button onClick={handleChangeIndex}>Change background color</button>
    </div>
    )
  }
 
  ReactDOM.render(<App />,document.getElementById('root'));