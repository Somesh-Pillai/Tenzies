import React, {useState, useEffect} from "react";
import '../style.css'
import Die from "./Die";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";

function Tenzies() {
    const [startTime, setStartTime] = useState(performance.now())
    const [seconds, setSeconds] = useState(0)

    const [bestTime, setBestTime] = useState(localStorage.getItem("best") != null ? localStorage.getItem("best") : parseInt(100000000000))
useEffect(() => {
    localStorage.setItem("bestScores", bestTime)
}, [bestTime])
      function end(startTime) {
        console.log(performance.now(), startTime)
        var timeDiff = performance.now() - startTime;
        timeDiff /= 1000;

        setSeconds(Math.round(timeDiff))
      }
    function generateNewDie(){
        return {
            value: (Math.ceil(Math.random() * 6)),
            isHeld: false,
            id: nanoid()
        }
    }
    

    function rollDice(){
        if(tenzies){
            setDice(allNewDice())
            setTenzies(false)
            setStartTime(performance.now())
            console.log(seconds, bestTime)
            if(seconds < bestTime)
                setBestTime(seconds)
                console.log(bestTime)
        }
        else{
        setDice(oldDice => oldDice.map(die =>{
            return die.isHeld ? die : generateNewDie()
        
    }))
}
    }
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
         newDice.push(generateNewDie())
    }
        return newDice
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die =>{
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
    }
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const diceElements = dice.map(die => 
        <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDie={() => holdDice(die.id)}/>
    )
    useEffect(()=> {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSame = dice.every(die => die.value === firstValue)
        if(allHeld && allSame){
           setTenzies(true)
           end(startTime);
        }
    }, [dice])

    
    return (
        <>
        {tenzies ? <Confetti /> : ""}
        <body className="tenzies-body">
        <main className="tenzies-main">
        <h1>{tenzies ? "TENZI!!" : "GO, Start Rolling Dices!"}</h1>
        <div className="dice-container">
        {diceElements}
        </div>
        <br/>
        <button className = "die-roll" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        {tenzies ? <h1>Won by {seconds}s!</h1> : ""}
        <h3>Best Time: {bestTime === parseInt(100000000000) ? "" : `${bestTime}s`}</h3>
        </main>
        </body>
        </>
    )
}

export default Tenzies;





