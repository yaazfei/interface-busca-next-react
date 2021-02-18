const API_KEY = process.env.API_KEY

export default async function personHandler({ query: { title } }, res) {

  console.log('API_KEY', API_KEY);
  const movieFetch = await fetch(`http://www.omdbapi.com/?apiKey=${API_KEY}&t=${title}`)

  if (movieFetch) {
    movieFetch.json().then(movie => res.status(200).json(movie));

  } else {
    res.status(404).json({ message: `Filme: ${title} não encontrado.` })
  }
}
