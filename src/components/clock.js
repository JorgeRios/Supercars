import React from 'react';
import ReactDOM from 'react-dom';

const Clock = (props)=>{
  return (
    <div>
    <h1>Super Cars</h1>
    <p>{props.date.toLocaleTimeString()}</p>
    </div>
  )
}

const Tick = ()=> {
  ReactDOM.render(
  <Clock date={new Date()} />,
  document.getElementById('probando') 
  );
}

setInterval(Tick, 1000);
export default Tick 
