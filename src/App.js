import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [movies,setMovies] = useState([

    {
      "Title": "Starwars: Goretech",
      "Year": "2018",
      "imdbID": "tt9336300",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
  },
  {
      "Title": "MeUndies x StarWars: The Dark Side",
      "Year": "2018",
      "imdbID": "tt9414858",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
  },
  {
      "Title": "MeUndies x StarWars: The Force",
      "Year": "2018",
      "imdbID": "tt9414918",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
  },

  ]);

  return (
    <div className="container-fluid movie-app">
    <div className="row">
    <MovieList movies={movies} />
    
    </div>
    <h1>Hello World</h1>
      
    </div>
  );
}

export default App;
