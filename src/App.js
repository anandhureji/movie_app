import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListheading from './components/MovieListheading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue]=useState('');
  const getMovieRequest=async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=9417d8d8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }

  useEffect(()=>{
    getMovieRequest(searchValue)
  },[searchValue])

  return (
    
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4">
    <MovieListheading heading="Movies" />
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    
    </div>
    <div className="row">
    <MovieList movies={movies} />
    
    </div>
    </div>
  
      
   
  );
}

export default App;
