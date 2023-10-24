import Result from "./Result";
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import Loader from "../containers/Loader";
import Message from "../containers/Message";
import {  toast } from 'react-toastify';


const Pokemon = () => {
    
    let {pokemon} = useParams();

    let pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let {data,error} = useFetch(pokeApi);

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(error?.err.err);

    useEffect(() => {
        setLoading(true);
        if(data){
            setLoading(false);
        }
        toast("Open")

        if(error?.err.err){
            setLoading(false);
            setErr(true);
        }
    }, [data,error]);

    return(
        <section>
            <div class="container">
                {loading && <Loader/>}
                {err && <Message 
                    msg={`Error ${error?.err.status} ${error?.err.statusText}`} 
                    bgColor="#dc3545"
                />}
                {data && <Result name={data.name}
                    avatar={data.sprites.other.dream_world.front_default}
                    weight={data.weight}
                    height={data.height}
                    types={data.types}
                    abilities={data.abilities}
                    stats={data.stats}
                />}
            </div>
            <div>
                <a className="inter-bold btn-home" href="/search">
                    Back To Search
                </a>
            </div>
        </section>
    )
}

export default Pokemon
