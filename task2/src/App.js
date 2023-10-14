// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
function App() {
  const dig={display: "flex",flexWrap:"wrap"}
  const but={flex:"1 1 25%", maxWidth:"25%"}
  const [calc,setCalc]=useState("");
  const [result,setResult]=useState("");
  const ops=['/','*','+','-','.'];
  const updateCalc= val =>{
    if(ops.includes(val) && calc==='' ||
    ops.includes(val) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    if(val==='d'){
      setCalc("");
      setResult("");
      return;
    }
    setCalc(calc+val);
    if(!ops.includes(val)){
      setResult(eval(calc+val).toString());
    }
  }
  return (
    
    <div className="App">
      
    <div className="calculator shadow m-3 rounded" style={{maxWidth:"400px",backgroundColor:"#00008b"}}>
    <span >⚪ 🌒 </span>
      <div className="display" style={{backgroundColor:"#00008b", color:"#D3D3D3"}}>
      <br/>
        {calc} &nbsp;= &nbsp;{result}
        {/* {
          calc.slice(-1)==='='?{result}:{calc}
        } */}
      </div>
      <div style={dig}>
        {/* style={{flex:"1 1 0%"}} */}
      <button  onClick={()=>updateCalc('7')} style={but}>7</button>
      <button onClick={()=>updateCalc('8')}  style={but}>8</button>
      <button onClick={()=>updateCalc('9')} style={but} >9</button>
      <button onClick={()=>updateCalc('d')}  style={but}>del</button>
      </div>
      <div style={dig}>
      <button onClick={()=>updateCalc('4')}  style={but} >4</button>
      <button onClick={()=>updateCalc('5')}  style={but}>5</button>
      <button onClick={()=>updateCalc('6')}  style={but}>6</button>
      <button onClick={()=>updateCalc('/')}  style={but}>/</button>
      </div>
      <div style={dig}>
      <button onClick={()=>updateCalc('1')}  style={but}>1</button>
      <button onClick={()=>updateCalc('2')}  style={but}>2</button>
      <button  onClick={()=>updateCalc('3')} style={but}>3</button>
      <button onClick={()=>updateCalc('-')}  style={but}>-</button>
      </div>
      <div style={dig}>
      <button  onClick={()=>updateCalc('0')} style={but}>0</button>
      <button  onClick={()=>updateCalc('.')} style={but}>.</button>
      <button  onClick={()=>updateCalc('=')} style={but}>=</button>
      <button  onClick={()=>updateCalc('+')} style={but}>+</button>
      </div>
    </div>
    </div>
  );
}

export default App;
