import { type Movie } from '../api';

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function MovieDetails({ movie, onClear }: { movie: Movie, onClear: () => void }) {
  return (
    <article className="movie details" onClick={(e) => e.stopPropagation()}>
      <h2>{movie.name}</h2>
      <div className="actions">
        <button onClick={onClear}>Back</button>
      </div>
      <dl>
        <dt>Runtime</dt>
        <dd>{movie.runtimeInMinutes} minute{movie.runtimeInMinutes === 1 ? '' : 's'}</dd>

        <dt>Rotten Tomatoes score</dt>
        <dd>{movie.rottenTomatoesScore}</dd>

        <dt>Budget</dt>
        <dd>{formatCurrency(movie.budgetInMillions * 1000000)}</dd>

        <dt>Box office revenue</dt>
        <dd>{formatCurrency(movie.boxOfficeRevenueInMillions * 1000000)}</dd>

        <dt>Adacemy Award nominations</dt>
        <dd>{movie.academyAwardNominations}</dd>

        <dt>Adacemy Award wins</dt>
        <dd>{movie.academyAwardWins}</dd>
      </dl>
    </article>
  );
}
