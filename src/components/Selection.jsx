import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

export default function BasicSelect({ setCategoria, categoria }) {
  const [categorias, setCategorias] = useState([]);

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  async function get_categories() {
    const res = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await res.json();
    setCategorias(data);
  }

  useEffect(() => {
    (async function () {
      try {
        get_categories();
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorías</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{ width: '100%' }}
          label="Categorías"
          value={categoria}
          onChange={handleChange}
        >
          {categorias.map((element) => {
            return (
              <MenuItem key={element} value={element}>
                {element}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
