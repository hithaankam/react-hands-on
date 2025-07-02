import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useGetSynonyms } from './hooks/useGetSynonyms'

function App() {
  const [word, setWord] = useState<string>('');
  const {isLoading, synonyms, getSynonyms} = useGetSynonyms();

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  }
  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord)
    getSynonyms(newWord);
  }
   return (
    <div className ="App">
  <form onSubmit = {handleFetchSynonyms}>
    <label htmlFor = "word-input"> Word</label>
    <input 
    value = {word}
    onChange={(e) => setWord(e.target.value)}
    id = "word-input"></input>
    <button>Submit</button>
  </form>
  {isLoading ? <div>Loading...</div> : null}
  <ul>{synonyms.map((synonym) => <li 
  onClick={() => handleSynonymClicked(synonym.word)}
  key = {synonym.word}>
    {synonym.word}
  </li>)}
  </ul>
  </div>

  )
}

export default App
