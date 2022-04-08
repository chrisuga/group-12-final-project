import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [factList, setFactList] = useState([])

  const getFactList = async () => {
    const data = fetch("/heres_a_fact").then(response => {
        if (response.ok) {
          return response.json()
        }
      }).then(data => setFactList(data.facts))

      console.log(factList)
  }

  function myFunc(a){
    console.log(a.b);
  }

  var myVar = {
    b: "myProperty"
  };

  myFunc(myVar)

  
  const listIds = factList.map(fact =>
    <div>
      <ul>
        <li>id = {fact.id}</li>
        <br></br>
        <li>submitter = {fact.submitter}</li>
        <br></br>
        <li>info = {fact.info}</li>
        <br></br>
        <li>source = {fact.source}</li>
        <br></br><br></br>
      </ul>
    </div>  
  );

  useEffect(() => {
    getFactList();
  }, [])

  console.log(factList)
  return (
    <>
      vvv you should see something in the console vvv
      { listIds }
    </>
  );
  
}

export default App;
