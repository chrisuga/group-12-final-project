import React, { useState, useEffect } from 'react';
import './App.css'
import { Cards } from './Cards';

//export const LocalList = () => {

    const fact1 = {
        "id": 1,
        "submitter": "cuga1",
        "info": "something, something, intel processors...",
        "source": "i made it up lol",
        "verified": true,
    };
    const fact2 = {
        id: 2,
        submitter: "cuga2",
        info: "there's no real evidence that the earth isn't flat",
        source: "dude trust me",
        verified: false,
    };
    const fact3 = {
        id: 3,
        submitter: "cuga1",
        info: "you are the only certain conscious being from your frame of reference",
        source: "Rene Descartes",
        verified: true,
    };

    export var localList = new Array();
    localList[0] = fact1;
    localList[1] = fact2;
    localList[2] = fact3;

    /*const [index, setIndex] = useState()
    const [currentFact, setCurrentFact] = useState({})

    function getRandomFact(arrayLength) {
        setIndex(Math.floor(Math.random() * arrayLength))
        setCurrentFact(localList[index])
        console.log(currentFact)
        return currentFact;
    }

    getRandomFact(localList.length);

    useEffect(() => {
        getRandomFact(localList.length);
    }, [])

    /*return (
        <>
            <h1>LocalList.js</h1>
            <Cards.js 
                fact={currentFact}
            />
        </>
    )*/

//}

