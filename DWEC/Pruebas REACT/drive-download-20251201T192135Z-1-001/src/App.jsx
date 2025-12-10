import "./App.css";

import {useState, useRef} from "react";
import {evaluate} from "mathjs";

import Alert from "./components/Alert";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App(){
  const [text, setText] = useState("");
  const [result, setResult] = useState("0");
  const [alert, setAlert] = useState({show:false});
  const lastCharRef = useRef("");

  // To modify the number of decimal digits displayed
  const numberOfDecimals = 2;

  function calculate(){
    try{
      const input = text.join("").split(" ").join("");
      let rawResult = evaluate(input);
      let formattedResult = Number.isInteger(rawResult)?
        rawResult:parseFloat(rawResult.toFixed(numberOfDecimals));

      setResult(formattedResult);      
      setText(formattedResult);
      lastCharRef.current = "";
    }catch(error){
      handleAlert("danger","Invalid input");    
      clearAll();
    }
  }

  function clearAll(){
    setText("");
    setResult("0");
  }

  function handleAlert({type,text}){
    setAlert({show:true,type,text});
    setTimeout(() => {
      setAlert({show:false});
      }, 3000)
  }

  function handleClickNumber(val){
    lastCharRef.current = val;
    setText(text => [...text,val]);
  }

  function saveResult(val){
    const result = [...text];
    
  }
  
  function handleClickAction(val){
    const actionKeys = ["+","-","*","/","."];

    if(!actionKeys.includes(lastCharRef.current)){
      lastCharRef.current = val;

      if(val==".") setText(text => [...text,val]);
      else setText(text => [...text," "+val+" "]);
    }
    else handleAlert("danger","Can't click 2 consecutive action keys");    
   // else handleAlert({type:"danger",text:"Can't click 2 consecutive action keys"});
  }

 
  return(
    <div className = "App">
        <div className = "calc-wrapper">
          {alert.show && <Alert type={alert.type} text={alert.text}/>}
          <Input text={text} result={result}/>
          <div className="row">
            <Button symbol="7" handleClick={handleClickNumber}/>
            <Button symbol="8" handleClick={handleClickNumber}/>
            <Button symbol="9" handleClick={handleClickNumber}/>
            <Button symbol="/" color="orange" handleClick={handleClickAction}/>
          </div>
          <div className="row">
            <Button symbol="4" handleClick={handleClickNumber}/>
            <Button symbol="5" handleClick={handleClickNumber}/>
            <Button symbol="6" handleClick={handleClickNumber}/>
            <Button symbol="*" color="orange" handleClick={handleClickAction}/>
          </div>
          <div className="row">
            <Button symbol="1" handleClick={handleClickNumber}/>
            <Button symbol="2" handleClick={handleClickNumber}/>
            <Button symbol="3" handleClick={handleClickNumber}/>
            <Button symbol="+" color="orange" handleClick={handleClickAction}/>
          </div>
          <div className="row">
            <Button symbol="0" handleClick={handleClickNumber}/>
            <Button symbol="." handleClick={handleClickAction}/>
            <Button symbol="=" color="blue" handleClick={calculate}/>
            <Button symbol="-" color="orange" handleClick={handleClickAction}/>
          </div>
          <div className="row">
            <Button symbol="Guardar Resultado" handleClick={handleClickAction}/>
          </div>
          <div className="row">
            <Button symbol="Clear" color="red" handleClick={clearAll}/>
          </div>
        </div>
    </div>
  )
}