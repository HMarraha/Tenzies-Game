import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import './App.css'
import Confetti from 'react-confetti'
import Die from './Die'
import Track from "./Track"
import one from "./assets/1.png"
import two from "./assets/2.png"
import three from "./assets/3.png"
import four from "./assets/4.png"
import five from "./assets/5.png"
import six from "./assets/6.png"

export default function App() {
  const imgs = [one,two,three,four,five,six]

  const [isLowScore, setIsLowScore] = useState(false)
  const [lowestScore, setLowestScore] = useState(JSON.parse(localStorage.getItem("lowScore")))
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(0)

  useEffect(() => {
    const isHeld = dice.every(die => die.isHeld)
    const firstNumber = dice[0].value
    const number = dice.every(die => die.value === firstNumber)
        if(isHeld && number) {
            setTenzies(true)
        }    
  },[dice])
  function generateNewDice(){
    return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
    }
  }

  function handleClick(){
    if (!tenzies){
        setRolls(prevRolls => prevRolls + 1)
        setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
                 die :
                 generateNewDice()
        }))
    } else {
        if (lowestScore === 0 ) {
          setLowestScore(rolls)
          localStorage.setItem("lowScore", rolls)
        } else {
          if (rolls <= lowestScore) {
            setLowestScore(rolls)
            localStorage.setItem("lowScore", rolls)
            setIsLowScore(true)
          }
        }
        setTenzies(false)
        setDice(allNewDice())
        setRolls(0)
    }
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
             {...die,isHeld: !die.isHeld} :
             die
                                        
    }))
  }

  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDice()) 
      }
      console.log(newDice)
      return newDice
  }
  
  const diceElements = dice.map(die => 
  <Die 
    isHeld={die.isHeld} 
    key={die.id} 
    value={die.value} 
    img={imgs[die.value - 1]}
    holdDice={()=> holdDice(die.id)} 
    />)

  
  return (
    <div>
      <main>
          {tenzies && <Confetti />}
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="btn" type="button" onClick={handleClick}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
      <section className="container">
        <Track isLowScore={isLowScore} lowestScore={lowestScore} rolls={rolls} />
      </section> 
    </div>  
    )
}