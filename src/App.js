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
    }).then(data => console.log(data.facts))
    .then(data => setFactList(data))


  }

  useEffect(() => {
    getFactList();
  }, [])

  return (
    <>
      <h2>App.js</h2>
      <Cards 
        listOfFacts={factList}
      />
    </>
  )
}

export default App;