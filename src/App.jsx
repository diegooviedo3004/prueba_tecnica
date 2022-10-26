import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card_joke from './components/Card_joke.jsx';
import Button from '@mui/material/Button';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(async () => {
    await generate_random_meme();
  }, []);

  async function generate_random_meme() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    const joke_api = data['value'];
    console.log(joke_api);
    setJoke(joke_api);
  }

  return (
    <div className="App">
      <Card_joke joke={joke} />
      <Button
        onClick={() => generate_random_meme()}
        variant="contained"
        style={{ marginTop: '10px' }}
      >
        Generar
      </Button>
    </div>
  );
}

export default App;
