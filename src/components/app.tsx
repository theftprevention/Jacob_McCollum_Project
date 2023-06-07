import { useState } from 'react';
import CharacterDetails from './characterDetails';
import CharacterList from './characterList';
import MovieDetails from './movieDetails';
import MovieList from './movieList';
import { type Character, type Movie } from '../api';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  return (
    <div className="app">
      <h1>The One App</h1>
      <MovieList onMovieClick={(movie) => setSelectedMovie(movie)} title="Movies" />
      <CharacterList onCharacterClick={(character) => setSelectedCharacter(character)} title="Characters" />
      {
        selectedMovie
          ? <MovieDetails movie={selectedMovie} onClear={() => setSelectedMovie(null)} />
          : null
      }
      {
        selectedCharacter
          ? <CharacterDetails character={selectedCharacter} onClear={() => setSelectedCharacter(null)} />
          : null
      }
    </div>
  );
}
