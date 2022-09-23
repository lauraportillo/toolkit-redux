import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPokemons());

        // TODO: realizar petición http

        const response = await fetch(` https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const data = await response.json();
        console.log(data);

        // dispatch(setPokemons());

    }

}