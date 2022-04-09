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

  const getRandomFact = async () => {
    const data = fetch("/get_random_fact").then(response => {
        if (response.ok) {
          return response.json()
        }
      })
  }

  useEffect(() => {
    getFactList();
  }, [])

  return (
    <>
      <h2>This is rendered from the App.js file</h2>
      <Cards 
        listOfFacts={factList}
      />
    </>
  )
}

export default App;