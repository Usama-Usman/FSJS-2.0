import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState([]);

  const fetchApi = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // console.log(data.data)
    // console.log(data.data?.species?.name);
    setDetail(res);
    console.log(res);
  };

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => setDetail(res));
  }, []);

  return (
    <div className='App'>
      <div className='wrapper-container'>
        <div className='flex-container'>
          <input
            type='text'
            placeholder='Enter Pokemon name...'
            onChange={event => setName(event.target.value)}
          />
          <button onClick={fetchApi}>Search</button>
        </div>
      </div>

      <img
        className='image'
        alt='image'
        src={detail.data?.sprites?.front_shiny}
      />
      <div className='grid-container'>
        <h1>NAME</h1>
        <h1>{detail.data?.name}</h1>
        <h1>ID</h1>
        <h1>{detail.data?.id}</h1>
        <h1>ORDER</h1>
        <h1>{detail.data?.order}</h1>
        <h1>HEIGHT</h1>
        <h1>{detail.data?.height}</h1>
        <h1>WEIGHT</h1>
        <h1>{detail.data?.weight}</h1>
        <h1>HP</h1>
        <h1>{detail.data?.stats[0]?.base_stat}</h1>
        <h1>ATTACK</h1>
        <h1>{detail.data?.stats[1]?.base_stat}</h1>
        <h1>DEFENCE</h1>
        <h1>{detail.data?.stats[2]?.base_stat}</h1>
        <h1>TYPE</h1>
        <h1>{detail.data?.types[0]?.type?.name}</h1>
      </div>
    </div>
  );
}

export default App;
