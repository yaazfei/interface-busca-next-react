import { useRouter } from 'next/router'
import useSWR from 'swr'
import Container from '../../components/Container'
import Layout from '../../components/Layout'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function MovieDetail() {
  const { query } = useRouter()

  console.log(query)
  console.log(`http://www.omdbapi.com/?apikey=cb20a6e8&i=${query.id}&plot=full`)
  const { data, error } = useSWR(
    () => query.id && `http://www.omdbapi.com/?apikey=cb20a6e8&i=${query.id}&plot=full`,
    fetcher
  )

  console.log('result ' + JSON.stringify(data));
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
  
    <Layout>
    <Container>
    <div className="container mx-auto p-16 text-center">
    
          <div>{data.Title}</div>
          <div>{data.Year}</div>
          <div>{data.Rated}</div>
          <div>{data.Released}</div>
          <div>{data.Runtime}</div>
          <div>{data.Genre}</div>
          <div>{data.Director}</div>
          <div>{data.Writer}</div>
          <div>{data.Actors}</div>
          <div>{data.Plot}</div>
          <div>{data.Language}</div>
          <div>{data.Country}</div>
          <div>{data.Awards}</div>
          <div>{data.Poster}</div>
          {/* <div>{data.Ratings}</div> */}
          <div>{data.Metascore}</div>
          <div>{data.imdbRating}</div>
          <div>{data.imdbVotes}</div>
          <div>{data.imdbID}</div>
          <div>{data.Type}</div>
          <div>{data.DVD}</div>
          <div>{data.BoxOffice}</div>
          <div>{data.Production}</div>
          <div>{data.Website}</div>
          <div>{data.Response}</div>
     
    </div>
    </Container>
  </Layout>



  )
}
