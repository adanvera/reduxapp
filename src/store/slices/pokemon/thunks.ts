import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api";

export const getPokemons = (page: number = 0) => {
    return async (dispatch: (action: any) => void, getState: () => any) => {
        dispatch(startLoadingPokemons());
        const { data }: { data: { results: any[] } } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    };
};
