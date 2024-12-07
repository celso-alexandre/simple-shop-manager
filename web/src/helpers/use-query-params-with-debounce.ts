import { useState, useCallback, useRef } from 'react';
import {
  useQueryParams,
  SetQuery,
  DecodedValueMap,
  QueryParamConfigMap,
  UrlUpdateType,
} from 'use-query-params';
import { debounce } from 'lodash';

export type Query<T extends QueryParamConfigMap> = Partial<DecodedValueMap<T>>;
export type SetDebouncedQuery<T extends QueryParamConfigMap> = (
  params: Query<T> | ((latestValues: Query<T>) => Query<T>),
  urlUpdateType?: UrlUpdateType
) => void;

export function useQueryParamsWithDebounce<T extends QueryParamConfigMap>(
  queryParams: T,
  debounceTimeMs = 400
): [DecodedValueMap<T>, SetQuery<T>, Query<T>, SetDebouncedQuery<T>] {
  const [query, setQuery] = useQueryParams<T>(queryParams);
  const [queryObject, setQueryObject] = useState<Query<T>>(query);
  const ref = useRef(queryObject);
  const debounced = useCallback(
    debounce((newParams, urlUpdateType) => {
      setQuery(newParams, urlUpdateType);
    }, debounceTimeMs),
    [ref]
  );
  const setDebouncedQuery: SetDebouncedQuery<T> = (params, urlUpdateType) => {
    const curr = typeof params === 'function' ? params(ref.current) : params;
    let queryObj: Query<T>;
    switch (urlUpdateType) {
      case 'replace':
      case 'push':
        queryObj = curr;
        break;
      default:
        queryObj = { ...ref.current, ...curr };
    }
    setQueryObject(queryObj);
    ref.current = queryObj;
    debounced(params, urlUpdateType);
  };
  return [query, setQuery, queryObject, setDebouncedQuery];
}
