import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {useState} from 'react';
import TextList from './components/TextList';
import Error from './components/Error';
import './App.css';

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

function App() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    // error handling for empty submit, set error state to true
    if(text.length === 0) {
      setErr(true)
      return
    }
    // if text length > 1, fetch from the api
    console.log(text);

    const fetchGifs = async () => {
      // const res = await giphy.animate(text, {limit: 20})
      const res = await giphy.animate(text, {limit: 20})
      console.log(res.data);
      setResults(res.data);
    }
    fetchGifs()
    // reset text state back to empty string
    setText('')
    // reset error state back to false
    setErr(false);

  }

  return (
    <div>
      <h1>Animated Text Generator</h1>
      <input className='input-field' placeholder='type text here' value={text} onChange={handleInput}/>
      <button className='submit-button' onClick={handleSubmit}>Submit</button>
      <Error isError={err} text='Enter your input for the animator'/>
      {results && <TextList gifs={results} />}
    </div>
  );
}

export default App;
