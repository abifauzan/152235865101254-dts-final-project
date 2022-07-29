import { GetColor } from "../styles/Mixin";
import { getThemePokemon } from "../utils/util";

function usePokemonTheme(data) {
  const { type: pokemonType } =
    Object.keys(data).length > 0 && getThemePokemon(data.types[0].type.name);
  const color = GetColor(pokemonType);

  return {
    pokemonType,
    color,
  };
}

export default usePokemonTheme;
