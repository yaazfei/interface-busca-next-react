import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "http://www.omdbapi.com/?apikey=cb20a6e8"

export const useGetMovie = title => {

  title = title.replace(' ', '_');

  const url = `${baseUrl} &t=${title}&type=movie`;

  console.log(url);
  const { data: data, error } = useSWR(url, fetcher)

  return { data, error };
}