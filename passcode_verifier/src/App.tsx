import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const password = "0000";
  const [pressedNums, setPressedNums] = useState<number[]>([])
  useEffect(() => {
    if (pressedNums.length === 4) {
      if (pressedNums.join('') === password) {
        alert('Access Granted');
      } else {
        alert('Access Denied');
        setPressedNums([]);
      }
    }
  }, [pressedNums]);
  return (
    <>
    {JSON.stringify(pressedNums)}
     {nums.map((number) => (
      <button 
      onClick = {() =>{
        setPressedNums((curr) => [...curr, number]);
      }
    }>
      {number}
      </button>
     ))}
    </>
  )
}

export default App
