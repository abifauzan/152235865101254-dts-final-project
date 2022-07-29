const initialState = {
  pokemonDeck: localStorage.getItem("pokemonDeck")
    ? JSON.parse(localStorage.getItem("pokemonDeck"))
    : [],
};

export default initialState;
