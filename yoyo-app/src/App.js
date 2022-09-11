import React from 'react';
import { useState, useEffect } from 'react';
import Moviecard from './Components/Moviecard';
import "./App.css"
import Header from './Components/header';
import axios from 'axios';
import DummyData from './Components/dummyData';


function App() {
  const [movies, setMovies] = useState([]);
  const [isError, setError] = useState(false);
  const [addMovie, setAddmovie] = useState(false);

  const [result, SetResult] = useState(movies)

  const handleChange = () => {
    setAddmovie(!addMovie);
  };

  const handleFilter = (e) => {
    let m = movies.filter(
      (movie) => movie.rating === Number(e) || movie.title.match(new RegExp(e, "i")
      ))
    SetResult(m)
  };

  const handleAdd = (e) => {
    setMovies([...movies, e])
  };

  useEffect(() => {

    const fetchDataFromApi = async () => {
      await axios.get('http://jsonplaceholder.typicode.com/albums')
      .then((response)=> {
        console.log(response.data);
        setMovies(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        // console.log(error)
        setError(true)
        // console.log(isError)
      })

    }

    fetchDataFromApi();
  }, [])


  return (
      <div>
      <Header filter={handleFilter} />
      
      {/* <div className='container-fluid wrapper'> */}
        
        {movies.map((movie, key) => (

          <DummyData movie={movie} key={key} />
        ))}
      {/* </div> */}
    </div>
  );
}

export default App;
