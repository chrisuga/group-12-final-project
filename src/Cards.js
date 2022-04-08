import React from 'react';

export const Cards = ({ listOfFacts }) => {

  const factDisplay = listOfFacts.map(fact =>
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

  return (
    <>
      {factDisplay}
    </>
  )
}

