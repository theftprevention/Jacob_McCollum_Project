import { get, getSingle, type ApiResult, type ListOptions } from './common';

export async function getMovie(movieId: string): Promise<Movie> {
  return getSingle<Movie>(`movie/${movieId}`);
}

export async function getMovies(options?: ListOptions): Promise<ApiResult<Movie>> {
  return get<Movie>('movie', options);
}

/**
 * Represents a single movie in the Lord of the Rings franchise.
 */
export interface Movie {
  /**
   * The unique identifier associated with the movie within the API.
   */
  _id: MovieId;
  /**
   * The number of Academy Awards for which the movie was nominated.
   */
  academyAwardNominations: number;
  /**
   * The number of Academy Awards won by the movie.
   */
  academyAwardWins: number;
  /**
   * The movie's total box office revenue, represented in millions of US dollars.
   */
  boxOfficeRevenueInMillions: number;
  /**
   * The movie's total allotted budget, represented in millions of US dollars.
   */
  budgetInMillions: number;
  /**
   * The unique identifier associated with the movie within the API.
   */
  id: MovieId;
  /**
   * The title of the movie.
   */
  name: string;
  /**
   * The movie's score on Rotten Tomatoes, represented as a number between 0 and 100.
   */
  rottenTomatoesScore: number;
  /**
   * The movie's total runtime, represented in minutes.
   */
  runtimeInMinutes: number;
}

/**
 * The type of the unique identifier associated with a movie within the API.
 */
export type MovieId = string;
