import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import Box from "./component/Box"

function App() {
  const count=useSelector(state=>state.count)
  const id=useSelector(state=>state.id)
  const password=useSelector(state=>state.password)
  const dispatch= useDispatch()
  const login=()=>{
    dispatch({type:"LOGIN",payload:{id:"sehyeon",password:"123"}})
  }
  const increase=()=>{
    dispatch({type:"increment",payload:{num:5}})
  }
  const decrease=()=>{
    dispatch({type:"decrease",payload:{num:5}});
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={login}>로그인</button>
      <Box/>
    </div>
  );
}

export default App;
