export default (url: string) => {
  const config = useRuntimeConfig();
  return useFetch(url, {
    baseURL: config.public.BASEURL,
  });
};
