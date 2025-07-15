import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  type LightState = "stop" | "ready" | "go";
  const [light, setLight] = useState<LightState>("stop");
  function getStopLight(l: LightState) {
    return `light ${l} ` + (light === l ? " on":"")
  }
  const STOP_DELAY1 = 300;
    const STOP_DELAY2 = 200;
      const STOP_DELAY3 = 500;
  useEffect(() =>{
    if (light === "stop"){
      setTimeout(() => setLight("go"), STOP_DELAY1);

    }
    else if (light === "ready") {
      setTimeout(() => setLight("stop"), STOP_DELAY2);
    }
    else if (light === "go") {
      setTimeout(() => setLight("ready"), STOP_DELAY3);
    }


  }, [light]);
  return (
    <>
    <div className = "stop-light">

      <div className = {getStopLight("stop")} ></div>
      <div className = {getStopLight("ready")} ></div>
      <div className = {getStopLight("go")} ></div>
    </div>
    </>
  )
}

export default App
