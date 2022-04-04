import React from 'react';

export const Cards = ({ listOfFacts }) => {
    return (
      <>
        <h1>This is rendered from the Cards.js file.</h1>
        <ul>          
          {listOfFacts.map(fact => {
            <div className="App">
              <h1>There should be a fact displayed under this text.</h1>             
                  <li>{fact.submitter}</li>
                  <br></br>
                  <li>{fact.info}</li>
                  <br></br>
                  <li>{fact.source}</li>
                  <br></br><br></br> 
            </div>
          })}
        </ul>
      </>
    )
}

