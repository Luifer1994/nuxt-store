import { useFetch } from "#app";
type useTypeFetch = typeof useFetch;

export const useFetchAPI: useTypeFetch = (path, options = {}) => {
  const baseApiUrl = useRuntimeConfig().public.urlBaseApi;

  options.baseURL = baseApiUrl;
  options.headers = {
    ...options.headers,
    Authorization: `Bearer `,
  };

  return useFetch(path, options);
};
