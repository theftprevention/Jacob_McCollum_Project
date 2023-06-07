import { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { getMovies, type ApiResult, type Movie } from '../api';

export default function MovieList({ onMovieClick, title }: { onMovieClick: (movie: Movie) => void, title: string }) {
  const [movies, setMovies] = useState<ApiResult<Movie> | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {  
      getMovies({ query }).then(setMovies);
    }, 600);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="movie list">
      <h2>{title}</h2>
      <SearchBar value={query} onChange={setQuery} placeholder="Search movies" />
      <ul>{movies?.docs.map((movie) => <li key={movie._id} onClick={() => onMovieClick(movie)}>{movie.name}</li>)}</ul>
    </div>
  );
}
