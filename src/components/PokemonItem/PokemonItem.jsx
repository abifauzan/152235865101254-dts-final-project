import React from "react";
import { Item, ItemImg, ItemDesc, ItemType, Container } from "./PokemonItem.style";
import { getThemePokemon } from "../../utils/util";
import useIsMobile from "../../hooks/useIsMobile";
import useFetchDetail from "../../hooks/useFetchDetail";
import usePokemonTheme from "../../hooks/usePokemonTheme";
import SkeletonBox from "../SkeletonBox/";
import _isEmpty from "lodash/isEmpty";
const Loading = <SkeletonBox mode="pokemon" />;

const variants = {
  desktop: {
    open: { opacity: 1, y: 0 },
    close: { opacity: 0, y: "100px" },
  },
  mobile: {
    open: { opacity: 1, y: 0 },
    close: { opacity: 0, y: "100px" },
  },
};

const PokemonItem = ({ data }) => {
  const { data: pokemon } = useFetchDetail(data.url);
  const pokemonTheme = usePokemonTheme(pokemon);
  const isMobile = useIsMobile();

  return _isEmpty(pokemon) ? (
    Loading
  ) : (
    <Container
      animate={!_isEmpty(pokemon) ? "open" : "close"}
      initial="close"
      variants={isMobile ? variants.mobile : variants.desktop}
      whileHover={{ scale: 1.1 }}
    >
      <Item to={`/pokemon/${pokemon.name}`} pokemontheme={pokemonTheme}>
        <ItemImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        />

        <ItemType>
          {pokemon.types.map((el) => (
            <div key={el.type.name}>
              <img src={getThemePokemon(el.type.name).image} alt={el.type.name} />
              <span>{el.type.name}</span>
            </div>
          ))}
        </ItemType>

        <ItemDesc pokemontheme={pokemonTheme}>
          <p>{pokemon.name}</p>
          <span>#{pokemon.id}</span>
        </ItemDesc>
      </Item>
    </Container>
  );
};

export default PokemonItem;
