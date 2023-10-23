import { useState, useEffect } from 'react';

export const useFetch = (pokeApi) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getPokemons = async (pokeApi) => {
            try {
                let res = await fetch(pokeApi);

                if(!res.ok){

                    throw{
                        err: true, 
                        status: res.status, 
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
                    };
                }

                let dataJson = await res.json();

                setIsPending(false);

                setData(dataJson);

                setError({err: false});
            } catch (err) {
                setIsPending(true);
                setError({err});
            }
        };
        
        getPokemons(pokeApi);
    }, [pokeApi]);

    return {data, isPending, error}
}
