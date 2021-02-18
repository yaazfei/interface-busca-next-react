import { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { useGetMovie } from '../useRequest'
import SearchTitle from '../components/SearchTitle'


export default function Index() {

    const [searchTerm, setSearchTerm] = useState("Christ");

    const search = value => {
        console.log('search()' + value)
        setSearchTerm(value);
    };

    useEffect( () => {
       console.log('useEffect()');
    })

    const { data, error } = useGetMovie(searchTerm);

    if (error) return <div> Failed to load </div>
    if (!data) return <div>Loading...</div>
    
    return (
        <Layout>
          <Container>
            <SearchTitle searchTerm={searchTerm} search={search} />
            <div className="container mx-auto p-16 text-center">
              <Movie key={data.imdbID} movie={data} />
            </div>
          </Container>
        </Layout>
      )
    }