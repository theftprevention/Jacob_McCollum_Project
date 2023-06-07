import { regExpEscape, toString } from '../helpers';

const apiAccessToken = process.env.REACT_APP_THE_ONE_API_ACCESS_TOKEN;
const apiBaseUrl = process.env.REACT_APP_THE_ONE_API_BASE_URL;

export async function get<T>(path: string, options?: ListOptions): Promise<ApiResult<T>> {
  const url = new URL(path, apiBaseUrl);
  if (options) {
    const { limit, offset, page } = options;
    if (limit) {
      url.searchParams.set('limit', String(limit));
    }
    if (offset) {
      url.searchParams.set('offset', String(offset));
    }
    if (page) {
      url.searchParams.set('page', String(page));
    }
    const query = toString(options.query);
    if (query) {
      url.searchParams.set(toString(options.queryKey) || 'name', `/${regExpEscape(query)}/i`);
    }
  }
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiAccessToken}`,
    },
    method: 'GET',
    mode: 'cors',
  });
  if (!response.ok) {
    throw response;
  }
  return await response.json();
}

export async function getSingle<T>(path: string): Promise<T> {
  return (await get<T>(path)).docs[0];
}

export interface ApiResult<T> {
  docs: T[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}

export interface ListOptions {
  limit?: number;
  offset?: number;
  page?: number;
  query?: string;
  queryKey?: string;
}
