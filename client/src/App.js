//Created App ====DONE
//Install dependencies ====npm install @tensorflow/tfjs @tensorflow-models/handpose react-webcam DONE
//Import dependencies =====DONE
//setup webcam ===== DONE
// Define Refrences =====DONE
//Handpose model loaded ====DONE
//Detection Hand =====DONE



import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";


//import logo from './logo.svg';
import './App.css';

function App() {

const webcamRef = useRef(null);
const canvasRef = useRef(null);

      const runHandpose = async()=>
      {
      const net = await handpose.load()
      console.log('Handpose model loaded. ');
      //Detects hand in loop

      // setInterval( ()=>{
      //   detect(net)
      // }, 108  )

      }; 
      


      const detect = async(net)=>{
        //Data availibility

        if(
          typeof webcamRef.current !== "undefined" && 
          webcamRef.current !== null &&
          webcamRef.current.video.readyState === 4
        ){
           
        //get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;


        //set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight; 


        //set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        //detect hands
        const hand = await net.estimateHands(video);
        console.log(hand);


        //draw mesh
          }

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
          height:400,
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
          width:1000,
          height:400,
          border: '1px solid red'
        }}
          />

      </header>
    </div>
  );
}

export default App;
