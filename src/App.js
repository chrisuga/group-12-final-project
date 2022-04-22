import './App.css';
import { useState, useEffect } from 'react';
import { Cards } from './Cards';

function App() {

  const [factList, setFactList] = useState([])

  const getFactList = async () => {
    console.log("inside getFactList")
    const data = fetch("/get_facts")
      .then(response => {
        if (response.ok) {
          return response.json()
        }})
      .then(data => console.log(data["facts"]))
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
    {console.log(factList)}
      <h2>This is rendered from the App.js file</h2>

    </>
  )
}

export default App;