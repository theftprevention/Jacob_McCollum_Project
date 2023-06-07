import { type CharacterId } from './characters';
import { get, getSingle, type ApiResult, type ListOptions } from './common';
import { type MovieId } from './movies';

export async function getQuote(quoteId: string): Promise<Quote> {
  return getSingle<Quote>(`quote/${quoteId}`);
}

export async function getQuotes(options?: ListOptions): Promise<ApiResult<Quote>> {
  return get<Quote>('quote', options);
}

export async function getQuotesByCharacter(
  characterId: CharacterId,
  options?: ListOptions
): Promise<ApiResult<Quote>> {
  return get<Quote>(`character/${characterId}/quote`, options);
}

export async function getQuotesByMovie(
  movieId: MovieId,
  options?: ListOptions
): Promise<ApiResult<Quote>> {
  return get<Quote>(`movie/${movieId}/quote`, options);
}

/**
 * Represents a significant line of dialog spoken by a single character within a single movie.
 */
export interface Quote {
  /**
   * The unique identifier associated with the quote within the API.
   */
  _id: QuoteId;
  /**
   * The ID of the character to whom the quote is attributed.
   */
  character: CharacterId;
  /**
   * The transcript of the quote's text.
   */
  dialog: string;
  /**
   * The unique identifier associated with the quote within the API.
   */
  id: QuoteId;
  /**
   * The ID of the movie within which the quote is found.
   */
  movie: MovieId;
}

/**
 * The type of the unique identifier associated with a quote within the API.
 */
export type QuoteId = string;
