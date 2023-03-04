import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListheading from './components/MovieListheading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

function App() {
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue]=useState('');
  const [favourites,setFavourites]= useState([]);
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

  const saveToLocalStorage =(items)=>{
    localStorage.setItem("react-movie-app",JSON.stringify(items));
  }

  const AddFavouriteMovie=(movie)=>{
    const newFavouriteList = [...favourites,movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

  }

  const removeFavouriteMovie=(movie)=>{
    const newFavouriteList= favourites.filter(
      (favourite)=>favourite.imdbID!==movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4">
    <MovieListheading heading="Movies" />
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    
    </div>
    <div className="col">
    <MovieList movies={movies}
    handleFavouriteClick={AddFavouriteMovie}
    favouriteComponent={AddFavourite} />
    
    </div>
    <div className="row d-flex align-items-center mt-4 mb-4">
    <MovieListheading heading="Favourites"/>
    </div>
    <div className='row'>
    <MovieList movies={favourites}
    handleFavouriteClick={removeFavouriteMovie}
    favouriteComponent={RemoveFavourite} />
    </div>
    </div>
  
      
   
  );
}

export default App;
