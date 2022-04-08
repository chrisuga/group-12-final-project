import './App.css';
import { useState, useEffect } from 'react';
import { Cards } from './Cards';

function App() {

  const [factList, setFactList] = useState([])
  
  const getFactList = async () => {
    const data = fetch("/get_facts").then(response => {
        if (response.ok) {
          return response.json()
        }
      }).then(data => setFactList(data.facts))

      console.log(factList)
  }
  
  //function handleClick() {
  //  fetch('/get_facts', {
  //    method: 'GET',
  //    headers: {
  //      'Content-Type': 'application/json',
  //    }
  //  }).then((response) => response.json())
  //  .then((data) => {
  //    setFact(data.fact);
  //  });

  useEffect(() => {
    getFactList();
  }, [])

  return (
    <>
      <h2>This is rendered from the App.js file.</h2>
      <Cards 
        factList={listOfFacts}
      />
    </>
  )
}

export default App;