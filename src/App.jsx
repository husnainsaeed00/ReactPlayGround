import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App(){
  //Use State Hook returns an arry we are using Array destructuring one variable is used to store the value and other one is used for the 
  //definition of the funtions to be used in the state
  const [count, setCount]=React.useState(0)
  function Add(){
    setCount( prevCount => prevCount+1)
  }
  function minus(){
    setCount(prevCount => prevCount-1)
  }
  return(
    <div>
      <button onClick={Add}>AddNumber</button>
      <button onClick={minus}>MinusNumber</button>
      <h1>{count}</h1>
   </div>
  )
}