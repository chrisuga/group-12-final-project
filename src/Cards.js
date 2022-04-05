import React from 'react';

export const Cards = ({ listOfFacts }) => {

  var localList = new Array();

  const itemOne = {
    "id": 1,
    "submitter": "cuga1",
    "info": "something, something, intel processors...",
    "source": "i made it up lol",
    "verified": true,
  };
  const itemTwo = {
    id: 2,
    submitter: "cuga2",
    info: "there's no real evidence that the earth isn't flat",
    source: "dude trust me",
    verified: false,
  };
  localList[0] = itemOne;
  localList[1] = itemTwo;

  const itemOneMap = Object.entries(itemOne).map(([k,v]) => `${k}: ${v}\n`);
  const itemTwoMap = Object.entries(itemTwo).map(([k,v]) => `${k}: ${v}\n`);
  
  

  return (
    <>
      <h1>Cards.js</h1>
      <ul>          
        <li>{itemOne.id}</li>
        <li>{itemOne.submitter}</li>
        <li>{itemOne.info}</li>
        <li>{itemTwo.id}</li>
        <li>{itemTwo.submitter}</li>
        <li>{itemTwo.info}</li>
      </ul>
    </>
  )
  
}
