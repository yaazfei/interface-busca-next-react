import Link from 'next/link'
import Image from 'next/image'

export default function Movie({ movie }) {
  return (

      <Link href="/movie/[id]" as={`/movie/${movie.imdbID}`}>

        {/* <a>{movie.Title}</a> */}
        <div className="card">

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
        </div>
      </Link>
  )
}
