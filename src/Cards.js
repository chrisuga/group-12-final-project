import React from 'react';

export const Cards = ({ listOfFacts }) => {
  console.log(listOfFacts)
    return (
      <>
        <h1>Cards.js file</h1>      
          {listOfFacts.map(fact => {
            <div>
              <h1>There should be a fact displayed under this text.</h1>             
                  {fact.submitter}
                  <br></br>
                  {fact.info}
                  <br></br>
                  {fact.source}
                  <br></br><br></br> 
            </div>
          })}
        
      </>
    )
}