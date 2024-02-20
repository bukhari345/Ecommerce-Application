import React from 'react'
import { useReducer } from 'react';
const reducer=(state,action)=>{
    if(action.type==="INCRIMENT"){
        return state+1;
    }
    if(action.type==="DECREMENT"){
        return state-1;
    }
return state;

}
const Reducer = () => {
   const initialState=0;
const [state,dispatch]=useReducer(reducer,initialState);

    return (
        <>
         {state}
         <button onClick={()=>{dispatch({type:"INCRIMENT"})}}>Incriment</button>
         <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
        
        </>
    )
}
export default Reducer;
