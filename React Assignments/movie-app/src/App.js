import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [fetchedData, setFetchedData] = useState([]);

  const fetchApi = async () => {
    const data = await axios.get(
      `http://www.omdbapi.com/?apikey=6a3c2874&s=${query}`
    );
    console.log(data.data?.Search);
    setFetchedData(data.data?.Search);
  };

  useEffect(() => {
    axios
      .get('http://www.omdbapi.com/?apikey=6a3c2874&s=fast')
      .then(res => setFetchedData(res.data?.Search));
  }, []);
  return (
    <div className='container'>
    <div className="center-div">
    <div className='search-container'>
      <input
        type='text'
        onChange={event => setQuery(event.target.value)}
        placeholder='Search your desired movie'
      />
      <button className='btn' onClick={fetchApi}>
        Search
      </button>
    </div>
    </div>
    <div className='card'>
      {fetchedData ? fetchedData.map((val, key) => {
        const { Title, Year, Poster } = val;
        return (
          <div className='grid-container'>
            <img src={Poster} alt='' width='300px' height="400px"/>
            <div className='flex-container'>
              <p className='name'>{Title}</p>
              <p className='category'>{Year}</p>
            </div>
          </div>
        );
      }) : <h1>No_Movie_Available!</h1>}
    </div>
  </div>
  );
}

export default App;
