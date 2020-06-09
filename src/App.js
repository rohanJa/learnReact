import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
 
  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button onClick={()=>setCount(count-1)}> Decrease</button>
      </div>
  );
}

export default App;
