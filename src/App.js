import './App.css';
import { useState, useEffect } from 'react';
import { Cards } from './Cards';
import { localList } from './LocalList'

function App() {

  const [factList, setFactList] = useState([])
  
  const getFactList = async () => {
    const data = fetch("/get_facts").then((response) => {
        return response.json()
    }).then((data) => setFactList(data.facts))
  }

  //.then((data) => setFactList([...factList, data]))

  useEffect(() => {
    getFactList();
    console.log(factList)
  }, [])

  //const [currentFact, setCurrentFact] = useState({})
  //const [index, setIndex] = useState()

  //console.log(localList)

  /*function getRandomFact(arrayLength) {
    setIndex(Math.floor(Math.random() * arrayLength))
    setCurrentFact(localList[index])
    console.log(currentFact)
    return currentFact;
  }*/

  /*function MyComponent(){
    useEffect(() => {
      getRandomFact(localList.length)
    }, [])
    return <div></div>
  }*/

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