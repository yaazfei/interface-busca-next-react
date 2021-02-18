import { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { useGetMovie } from '../useRequest'
// import PrincipalContainer from '../components/PrincipalContainer'

export default function SearchTitle(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        event.preventDefault();
        console.log('handleChange()' + event.target.value)
        setSearchTerm(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();
        console.log('handleClick() ' + searchTerm)
        props.search(searchTerm);
        // setImdbID(searchTerm);
    };


    return (

        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={handleClick}>PROCURAR</button>
        </div>

    )
}
