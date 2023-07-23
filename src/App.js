import React,{useState} from 'react'
import {Parser}  from 'expr-eval'

import './App.css'

const App=()=>{
  const[input,setInput]=useState('')

  const onChangeHandler=(event)=>{
    setInput(event.target.value)
  }

  const evaluateResult=()=>{
    try{
      const result=Parser.evaluate(input)
      setInput(result.toString())
    }catch(error){
      console.log('Error: ', error)
    }
  }
  return(
    <div className="bg-container">
      
      <div className='calculator-container'>
      <h2>Simple Calculator</h2>
        <input type="text" name="input" onChange={onChangeHandler} value={input}/> 
        <br/>
        <button onClick={()=>setInput('')}>AC</button>
        <button onClick={()=>setInput(input.slice(0,-1))}>Del</button>
        <button onClick={()=>setInput(input+'%')}>%</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <br/>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'+')}>+</button>
        <br/>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button>
        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <br/>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <br/>
        <button onClick={()=>setInput(input+'00')}>00</button>
        <button onClick={()=>setInput(input+'0')}>0</button>
        <button onClick={()=>setInput(input+'.')}>.</button>
        <button onClick={evaluateResult}>=</button>        
      </div> 
    </div>
  )
}

export default App;
