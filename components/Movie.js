import Link from 'next/link'
import Image from 'next/image'

export default function Movie({ movie }) {
  return (

    <Link href="/movie/[id]" as={`/movie/${movie.imdbID}`}>

 
      
<div className="h-screen flex flex-row flex-wrap p-3">
      <div className="mx-auto w-2/3">

        <div className="rounded-lg shadow-lg bg-gray-100 w-full flex flex-row p-3 antialiased">
          <div className="md:w-1/3 w-full">
            <img className="rounded-lg shadow-lg antialiased" src={movie.Poster} title="moviePoster">
            </img>
          </div>
          <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">

            <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div className="text-2xl leading-tight">{movie.Title}</div>
              <div className="text-normal hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{movie.Year}</span></div>
              <div className="text-sm pt-6 text-grey-darker text-justify">{movie.Plot}</div>
                  
              <div className="text-sm hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">{movie.Director}</div>
            </div>
          </div>
        </div>

      </div>
      </div>



      {/* <div className="w-screen h-screen flex flex-row flex-wrap p-3">
        <div className="mx-auto w-2/3">

<div className="rounded-lg shadow-lg bg-gray-100 w-full flex flex-row p-3 antialiased">
            <div className="md:w-1/3 w-full">
            <img className="rounded-lg shadow-lg antialiased" src={movie.Poster} title="moviePoster">
            </img>
  </div>
            <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div className="text-2xl leading-tight">{movie.Title}</div>
              <div className="text-normal hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{movie.Year}</span></div>
              <div className="text-sm pt-6 text-grey-darker text-justify">{movie.Plot}</div>
              <div className="text-sm hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">{movie.Director}</div>
            </div>
            </div>

  </div>
        </div> */}




        {/* <div className="card">

          <Image
            src={movie.Poster  && movie.Poster != 'N/A' ?  movie.Poster : '/public/vercel.svg'}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <div className="container">
            <h4><b>{movie.Title}</b></h4>
            <p>{movie.Year}</p>
            <p>{movie.Director}</p>
          </div>
        </div> */}





    </Link>
  )
}
