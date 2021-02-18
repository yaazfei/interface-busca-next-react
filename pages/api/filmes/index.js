const API_KEY = process.env.API_KEY

export default async function handler(req, res) {

  const movieFetch = await fetch(`http://www.omdbapi.com/?apiKey=${API_KEY}&t=Mad_Max`)

  movieFetch.json().then(movie => res.status(200).json(movie));
}

