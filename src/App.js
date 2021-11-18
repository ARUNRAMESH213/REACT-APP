import react,{useState, useEffect, useRef} from 'react';
import './App.css';
import Sample from './hello';

function App() {
  const Sayhello=()=>{ 
    console.log("3")
  }

  const inputRef=useRef();
  const  [value,setvalue]=useState(5) ;
  const likes=()=>setvalue(prevvalue=> prevvalue + 1);
const  hates=()=>setvalue( prevvalue=> prevvalue - 1);
useEffect(()=>{
  console.log("its changing")
},[])
    
  return (
    <div>  
      <h1>output</h1>
      <button  className="button" onClick={Sayhello}>hello </button>
    <button ref={inputRef} onClick={likes}>likes</button>
    <button onClick={hates}>hates</button>
    <h1>{value}</h1>
    <Sample />
    <button onClick={()=>{inputRef.current.focus()}}>focus</button>

    
      
    </div>
  );
}

export default App;
