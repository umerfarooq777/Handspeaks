//Created App ====DONE
//Install dependencies ====npm install @tensorflow/tfjs @tensorflow-models/handpose react-webcam DONE
//Import dependencies =====DONE
//setup webcam ===== DONE
// Define Refrences =====DONE
//Handpose model loaded ====DONE
//Detection Hand =====DONE



import React, {useRef,useState} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from './utility';

//import logo from './logo.svg';
import './App.css';

function App() {
const [detection,setDetection] = useState(false);
const [mode,setMode] = useState("mode-1");

const webcamRef = useRef(null);
const canvasRef = useRef(null);

      const runHandpose = async()=>
      {
      const net = await handpose.load()
      console.log('Handpose model loaded. ');
      //Detects hand in loop

      setInterval( ()=>{
        detect(net)
        }, 100  )

      }; 



      // const changeMode = ()=>
      // {
      //   if(mode!=="mode-0"){
      //     setMode("mode-0")

      //   }else{
      //     setMode("mode-1")
      //   }
      
      // };
      


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
        // console.log(hand);
        // console.log("ok");
        

        //draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);

          }

      }

    
      runHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
<h1 className='heading'>I'm Ironman</h1>
        <Webcam ref={webcamRef} className={`webcam ${mode}`}
        // style={{
        //   position:"absolute",
        //   marginLeft:"auto",
        //   marginRight:"auto",
        //   left:0,
        //   right:0,
        //   textAlign:"center",
        //   zIndex:10,
        //   width:890,
        //   height:600,
        //   border: '1px solid blue'
        // }}
        />

        <canvas
        ref={canvasRef} className={`canvas ${mode}`}
        // style={{
        //   position:"absolute",
        //   marginLeft:"auto",
        //   marginRight:"auto",
        //   left:0,
        //   right:0,
        //   textAlign:"center",
        //   zIndex:10,
        //   width:800,
        //   height:600,
        //   border: '1px solid red'
        // }}
          />

        </div>
      </header>
    </div>
  );
}

export default App;
