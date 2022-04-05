// import Home from "./home";
import "./App.css";
import React ,{useState} from "react";
// import About from "./about";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  const[count,setCount]=useState(4)
  const [theme, setTheme]=useState('number');
  function decreamentCount(){
    setCount(count-1)
    setTheme();
  }
  function increamentCount(){
    setCount(count+1)
    setCount(count+1)
    setTheme("number")
  }
  return(
    <>
    <button   onClick={decreamentCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={increamentCount}>+</button>
    
    </>
  )
}

export default App;
