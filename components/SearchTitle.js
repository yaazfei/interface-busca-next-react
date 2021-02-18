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


        <form>
            <div className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
            <input onChange={handleChange} value={searchTerm} type="text" name="buscar" id="buscar" placeholder="Informe o nome do filme"
                className="appearance-none w-full outline-none focus:outline-none active:outline-none" />
            <button onClick={handleClick} type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
        </form>


        // <div>
        //     <input
        //         type="text"
        //         placeholder="Search"
        //         value={searchTerm}
        //         onChange={handleChange}
        //     />
        //     <button onClick={handleClick}>PROCURAR</button>
        // </div> */}

    )
}
