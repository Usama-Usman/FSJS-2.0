import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState([]);
  const [submit, setSubmit] = useState('');

  const fetchApi = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${submit}`
    );
    setQuery(res.data.meals);
  };

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(res => setQuery(res.data.meals));
  }, []);
  return (
    <div className='container'>
      <div className='center-div'>
        <div className='search-container'>
          <input
            type='text'
            onChange={event => setSubmit(event.target.value)}
            placeholder='Search Recipes'
          />
          <button className='btn' onClick={fetchApi}>
            Submit
          </button>
        </div>
      </div>
      <div className='card'>
        {query ? (
          query.map((val, key) => {
            const { strMeal, strMealThumb, strCategory, strInstructions } = val;
            return (
              <div className='grid-container'>
                <img src={strMealThumb} alt='' width='300px' height='350px' />
                <div className='flex-container'>
                  <p className='name'>{strMeal}</p>
                  <p className='category'>{strCategory}</p>
                </div>
                <p className='detail'>{strInstructions.slice(0, 150)}</p>
              </div>
            );
          })
        ) : (
          <h1>Wrong Movie T</h1>
        )}
      </div>
    </div>
  );
}

export default App;
