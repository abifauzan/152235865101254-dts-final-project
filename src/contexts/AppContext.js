import React, { createContext, useReducer, useEffect, useState } from "react";
import { ADD_POKEMON_TO_DECK, REMOVE_POKEMON_FROM_DECK } from "./Pokemon.action";
import initialState from "./Pokemon.state";
import PokemonReducer from "./Pokemon.reducer";

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  useEffect(
    () => localStorage.setItem("pokemonDeck", JSON.stringify(state.pokemonDeck)),
    [state?.pokemonDeck]
  );

  // actions

  const addPokemonToDeck = (pokemon, nickname, image) => {
    dispatch({
      type: ADD_POKEMON_TO_DECK,
      payload: {
        ...pokemon,
        nickname,
        image,
      },
    });
  };

  const removePokemonFromDeck = (id) => {
    dispatch({
      type: REMOVE_POKEMON_FROM_DECK,
      payload: id,
    });
  };

  return (
    <AppContext.Provider
      value={{
        pokemonDeck: state.pokemonDeck,
        addPokemonToDeck,
        removePokemonFromDeck,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
