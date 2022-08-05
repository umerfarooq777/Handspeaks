//Created App ====DONE
//Install dependencies ====npm install @tensorflow/tfjs @tensorflow-models/handpose react-webcam DONE
//Import dependencies =====DONE
//setup webcam ===== DONE
// Define Refrences =====DONE
//Handpose model loaded ====DONE


import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";


//import logo from './logo.svg';
import './App.css';

function App() {

const webcamRef = useRef(null);
const canvasRef = useRef(null);

const runHandpose = async ()=>{
const net = await handpose.load()
console.log('Handpose model loaded. ')
}
runHandpose();





  return (
    <div className="App">
      <header className="App-header">

        <Webcam ref={webcamRef} 
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:12,
          width:1000,
          height:650,
          border: '1px solid blue'
        }}/>

        <canvas
        ref={canvasRef} 
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:10,
          width:1100,
          height:650,
          border: '1px solid red'
        }}
          />

      </header>
    </div>
  );
}

export default App;
