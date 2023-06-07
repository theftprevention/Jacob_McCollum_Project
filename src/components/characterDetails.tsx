import { useEffect, useState } from 'react';
import { getQuotesByCharacter, type ApiResult, type Character, type Quote } from '../api';

export default function CharacterDetails({ character, onClear }: { character: Character, onClear: () => void }) {
  const [quotesResult, setQuotesResult] = useState<ApiResult<Quote> | null>(null);
  useEffect(() => {
    getQuotesByCharacter(character._id).then(setQuotesResult);
  }, [character._id]);
  const quotes = (quotesResult ? quotesResult.docs : []).map((quote) =>
    <blockquote key={quote._id}>{quote.dialog}</blockquote>
  );
  return (
    <article className="movie details" onClick={(e) => e.stopPropagation()}>
      <h2>{character.name}</h2>
      <div className="actions">
        <button onClick={onClear}>Back</button>
      </div>
      {
        character.wikiUrl
          ? <div className="links">
              <a href={character.wikiUrl} target="_blank" rel="noreferrer">Wiki entry</a>
            </div>
          : null
      }
      <dl>
        {character.birth ? [<dt>Birth</dt>, <dd>{character.birth}</dd>] : null}
        {character.death ? [<dt>Death</dt>, <dd>{character.death}</dd>] : null}
        {character.gender ? [<dt>Gender</dt>, <dd>{character.gender}</dd>] : null}
        {character.hair ? [<dt>Hair</dt>, <dd>{character.hair}</dd>] : null}
        {character.height ? [<dt>Height</dt>, <dd>{character.height}</dd>] : null}
        {character.race ? [<dt>Race</dt>, <dd>{character.race}</dd>] : null}
        {character.realm ? [<dt>Realm</dt>, <dd>{character.realm}</dd>] : null}
        {character.spouse ? [<dt>Spouse</dt>, <dd>{character.spouse}</dd>] : null}
        {quotes.length ? [<dt>Quotes</dt>, <dd className="quotes">{quotes}</dd>] : null}
      </dl>
    </article>
  );
}
