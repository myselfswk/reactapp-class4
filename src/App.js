import React, {useState} from 'react';
import {Message} from './message.js';
import './App.css';

export default function App() {
  let [count, setcount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`App box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Waleed Khan</h1>
      <Message counter = {count}/>
      <hr />
      <button onClick={()=> setcount(++count)}>Update Counter</button>
      <p>Have A Good {isMorning ? "Morning" : "Night"}</p>
      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}