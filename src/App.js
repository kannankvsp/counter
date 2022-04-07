import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter : {count}</h1><br />
      <button onClick={() => setCount(count + 1)}>ADD+</button>
      <button onClick={() => setCount(count - 1)}>MINUS-</button>
    </div>
  );
}

export default App;
