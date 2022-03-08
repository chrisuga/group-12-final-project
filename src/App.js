import './App.css';
import {useState} from 'react'

function App() {
  const [fact, setFact] = useState("");
  function handleClick() {
    fetch('/fun_fact', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((data) => {
      setFact(data.fact);
    });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click me!</button>
      <br></br>
      {fact}
    </div>
  );
}

export default App;
