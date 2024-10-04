import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"
import { AppDispatch, RootState } from "./store" // Import AppDispatch and RootState

export const PokemonApp = () => {

  const dispatch: AppDispatch = useDispatch() // Type the dispatch
  const { isLoading, pokemons = [], page } = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>
      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
      <button
        onClick={() => dispatch(getPokemons(page))}
      >Next
      </button>
    </>
  )
}
