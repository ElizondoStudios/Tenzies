import React from "react"
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';
import Dice from "./components/Dice"
import Stats from "./components/Stats";
import NewBest from "./components/NewBest"

function App() {
  //Core gameplay
  const [die, setDie]= React.useState(allNewDice());
  const [tenzies, setTenzies]= React.useState(false);

  //Rolls
  const [rolls, setRolls]= React.useState(0);

  //Time
  const [isRunning, setIsRunning]= React.useState(true);

  //New Best splash screen
  const [newBest, setNewBest]=React.useState(false);

  function toggleNewBest(){
    setNewBest(prevNewBest => !prevNewBest)
  }

  //Check if game is won
  React.useEffect(()=>{
    const num= die[0].value
    if(die.every(dice => dice.value== num && dice.isHeld)){
      setTenzies(true)
      setIsRunning(false)
    }
  }, [die])

  function allNewDice(){
    const diceArray=[]
    for(let i=0; i<10; i++)
      diceArray.push(
        { id: nanoid(),
          value: Math.ceil(Math.random()*6),
          isHeld: false}
        )
    return(diceArray)
  }

  function rollDice(){
    setDie(prevDie => prevDie.map(
      dice => dice.isHeld? dice: {...dice, value: Math.ceil(Math.random()*6)}
    ))
    setRolls(prevRolls => prevRolls+1);
  }

  function toggleDice(id){
    setDie(prevDie => prevDie.map(
      dice => dice.id===id? {...dice, isHeld: !dice.isHeld}: dice))
  }

  function resetGame(){
    setTenzies(false)
    setRolls(0)
    setIsRunning(true)
    setDie(allNewDice())
  }

  return (
    <div className="App">
      {newBest && <NewBest
       toggleNewBest={toggleNewBest}
      />}
      <main>
        {tenzies && <Confetti/>}
        <div className="App--info">
          <h1>
            Tenzies
          </h1>

          <p>Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.
          </p>
        </div>
        <Stats
          rolls={rolls}
          toggleNewBest={toggleNewBest}
          isRunning={isRunning}
        />
        <div className="App--die">
          {die.map(dice => 
          <Dice 
            key={dice.id} 
            value={dice.value} 
            isHeld={dice.isHeld}
            toggleDice={()=>{toggleDice(dice.id)}}
            />
          )}
        </div>
          <button 
            className="App--roll-dice"
            onClick={!tenzies? rollDice: resetGame}
          >{tenzies? "New Game": "Roll"}</button>
      </main>
    </div>
  )
}

export default App
