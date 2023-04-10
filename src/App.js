import React from 'react';
import { useState } from 'react';
import './App.css';


const App=()=> {
  const [count,setCount] = useState(0)

  const handleIncrease = () =>{
    setCount(count + 1)
  }
  const handleDecrease = () =>{
   setCount(count - 1 )
  }
  return (
    <div>
    <div className="App">
      <div><h1 className='title'>Counter Wrap</h1></div>
     <button onClick={handleIncrease}>+</button>
     <span>{count}</span>
     <button onClick={handleDecrease}>-</button>
     
    </div>
    </div>
  );
}

export default App;
