import { useState, useEffect } from 'react';
import './App.css';
import Card_joke from './components/Card_joke.jsx';
import Selection from './components/Selection.jsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  const [joke, setJoke] = useState('');
  const [categoria, setCategoria] = useState('dev');

  async function generate_random_meme() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    const joke_api = data['value'];
    setJoke(joke_api);
  }

  async function generar_meme(categoria) {
    const res = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoria}`
    );
    const data = await res.json();
    const joke_api = data['value'];
    setJoke(joke_api);
  }

  useEffect(() => {
    (async function () {
      try {
        generate_random_meme();
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Card_joke joke={joke} />
      <Stack spacing={2} style={{ marginTop: '10px' }}>
        <Selection categoria={categoria} setCategoria={setCategoria} />
        <Button onClick={() => generar_meme(categoria)} variant="contained">
          Generar
        </Button>
        <Button
          color="error"
          onClick={() => generate_random_meme()}
          variant="contained"
        >
          Aleatorio
        </Button>
      </Stack>
    </div>
  );
}

export default App;
