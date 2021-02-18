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


<div className="h-screen flex flex-row flex-wrap p-3">
      <div className="mx-auto w-2/3 h-max">

        <div className="rounded-lg shadow-lg bg-gray-100 w-full flex flex-row p-3 antialiased">
          <div className="md:w-1/3 w-full">
            <img className="rounded-lg shadow-lg antialiased" src={data.Poster} title="moviePoster">
            </img>
          </div>
          <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">

            <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div className="text-2xl leading-tight">{data.Title}</div>
              <div className="text-normal hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{data.Year}</span></div>
              <div className="text-sm pt-6 text-grey-darker text-justify pb-6">{data.Plot}</div>
              <div className="text-sm hover:text-gray-400 pt-6 cursor-pointer md:absolute pt-3 md:pt-0 right-0">{data.Director}</div>
              <div className="grid grid-cols-1 divide-y divide-red-500"> <br></br>
              <div className="text-sm pt-6 text-grey-darker text-justify"><b>Classificação: </b>{data.Rated}</div>
              </div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Data:</b> {data.Released}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Gênero: </b>{data.Genre}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Escritor: </b>{data.Writer}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Atores: </b>{data.Actors}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Idioma: </b>{data.Language}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Nacionalidade:</b> {data.Country}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Prêmios: </b>{data.Awards}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Tipo: </b>{data.Type}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>DVD: </b>{data.DVD}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Produção: </b>{data.Production}</div>
              <div className="text-sm pt-1 text-grey-darker text-justify"><b>Website:</b> {data.Website}</div>

              
              
            </div>
          </div>
        </div>

      </div>
      </div>












        {/* <div className="max-w-md w-full lg:flex">

          <div className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${data.Poster})` }} title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-16">
              <p className="text-sm text-grey-dark flex items-center">
                <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
  Members only
</p>
              <div className="text-black font-bold text-xl mb-32">Can coffee make you a better developer?</div>
              <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={data.Poster} alt="Avatar of Jonathan Reinink" />
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div>
          </div>
        </div> */}







        {/* <div className="container mx-auto p-16 text-center">
    
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
          <div>{data.Ratings}</div>
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
     
    </div> */}



    </Container>
  </Layout >



  )
}
