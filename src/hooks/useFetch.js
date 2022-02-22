import { useState, useEffect } from "react";

//const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
const URL_API = "https://pokeapi.co/api/v2/pokemon/";

const useFetch = ({pokemon = 'pikachu'}) => {
    const [pokes, setPokes] = useState([]);

    //const fullUrl = pokemon === undefined ? URL_API : URL_API + pokemon;

    const fullUrl = URL_API + pokemon;

    useEffect( () => {

        fetch(fullUrl)
        .then(res => res.json())
        //.then(data => setPokes(data.results))
        .then( data => setPokes(data))

    }, [pokemon])

    return [pokes]
}

export default useFetch;