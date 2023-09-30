import React, { useState , useEffect} from 'react'
import Block from './Block'

function Board() {

  const [marks, setMarks]=useState([0,0,0,0,0,0,0,0,0])
  const [player, setPlayer]=useState(1)
  const [message, setMessage]=useState("New Game")
  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let c of combinations) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
       setMessage("player 1 wins")
      
      }
      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        setMessage("player 2 wins")
    
      }
      if (marks[c[3]] === 1 && marks[c[4]] === 1 && marks[c[5]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[3]] === 2 && marks[c[4]] === 2 && marks[c[5]] === 2) {
        setMessage("player 2 wins")
    
      }


      if (marks[c[6]] === 1 && marks[c[7]] === 1 && marks[c[8]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[6]] === 2 && marks[c[7]] === 2 && marks[c[8]] === 2) {
        setMessage("player 2 wins")
    
      }
      if (marks[c[0]] === 1 && marks[c[3]] === 1 && marks[c[6]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[0]] === 2 && marks[c[3]] === 2 && marks[c[6]] === 2) {
        setMessage("player 2 wins")
    
      }


      if (marks[c[1]] === 1 && marks[c[4]] === 1 && marks[c[7]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[1]] === 2 && marks[c[4]] === 2 && marks[c[7]] === 2) {
        setMessage("player 2 wins")
    
      }
      if (marks[c[2]] === 1 && marks[c[5]] === 1 && marks[c[8]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[2]] === 2 && marks[c[5]] === 2 && marks[c[8]] === 2) {
        setMessage("player 2 wins")
      }
      if (marks[c[0]] === 1 && marks[c[4]] === 1 && marks[c[8]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[0]] === 2 && marks[c[4]] === 2 && marks[c[8]] === 2) {
        setMessage("player 2 wins")
    
      }
      if (marks[c[2]] === 1 && marks[c[4]] === 1 && marks[c[6]] === 1) {
        setMessage("player 1 wins")
      
      }
      if (marks[c[2]] === 2 && marks[c[4]] === 2 && marks[c[6]] === 2) {
        setMessage("player 2 wins")
      }
    }

  }, [marks]);

  const changeMark=(i)=>{
    const x=[...marks]
    if(x[i]===0){
      x[i]=player
    setMarks(x)
    setPlayer(player===1? 2:1)
    }
    else{
      alert("please click empty block")
    }
  }
  const handleStart=()=>{
    setMarks([0,0,0,0,0,0,0,0,0])
    setMessage("New Game")
  }
  return (
    <div className='Board'>
        <h1>  {message}</h1>
      <div>
      <Block mark={marks[0]}  changeMark={changeMark} position={0}/>
      <Block mark={marks[1]}   changeMark={changeMark} position={1}/>
      <Block mark={marks[2]}   changeMark={changeMark}position={2}/>
      </div>
      <div>
      <Block mark={marks[3]}  changeMark={changeMark} position={3}/>
      <Block mark={marks[4]}   changeMark={changeMark} position={4}/>
      <Block mark={marks[5]}   changeMark={changeMark} position={5}/>
      </div>
      <div>
      <Block mark={marks[6]}  changeMark={changeMark} position={6}/>
      <Block mark={marks[7]}   changeMark={changeMark} position={7}/>
      <Block mark={marks[8]}   changeMark={changeMark} position={8}/>
      </div>
      <button onClick={()=>handleStart()}>Restart</button>
    </div>
  )
}

export default Board
