import { get, getSingle, type ApiResult, type ListOptions } from './common';

export async function getCharacter(characterId: string): Promise<Character> {
  return getSingle<Character>(`character/${characterId}`);
}

export async function getCharacters(options?: ListOptions): Promise<ApiResult<Character>> {
  return get<Character>('character', options);
}

/**
 * Represents a single character in the Lord of the Rings franchise.
 */
export interface Character {
  /**
   * The unique identifier associated with the character within the API.
   */
  _id: CharacterId;
  /**
   * A string describing the date of the character's birth.
   */
  birth?: string;
  /**
   * A string describing the date of the character's death.
   */
  death?: string;
  /**
   * A string describing the character's gender.
   */
  gender?: string;
  /**
   * A string describing the character's hair.
   */
  hair?: string;
  /**
   * A string describing the character's height.
   */
  height?: string;
  /**
   * The character's name.
   */
  name: string;
  /**
   * A string describing the character's race.
   */
  race?: string;
  /**
   * A string describing the realm from which the character originates.
   */
  realm?: string;
  /**
   * A string identifying the character's spouse.
   */
  spouse?: string;
  /**
   * The URL of the character's entry within the Lord of the Rings Wiki.
   */
  wikiUrl?: string;
}

/**
 * The type of the unique identifier associated with a character within the API.
 */
export type CharacterId = string;
