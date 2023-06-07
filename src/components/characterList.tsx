import { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { getCharacters, type ApiResult, type Character } from '../api';

export default function CharacterList({ onCharacterClick, title }: { onCharacterClick: (character: Character) => void, title: string }) {
  const [characters, setCharacters] = useState<ApiResult<Character> | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {  
      getCharacters({ query }).then(setCharacters);
    }, 600);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="character list">
      <h2>{title}</h2>
      <SearchBar value={query} onChange={setQuery} placeholder="Search characters" />
      <ul>{characters?.docs.map((character) => <li key={character._id} onClick={() => onCharacterClick(character)}>{character.name}</li>)}</ul>
    </div>
  );
}
