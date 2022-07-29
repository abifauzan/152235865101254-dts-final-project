import { POKEMON_TYPE } from "./constant";
import {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
} from "../assets";

export const getThemePokemon = (type) => {
  switch (type) {
    case "normal":
      return {
        type: POKEMON_TYPE.NORMAL,
        image: normal,
      };
    case "fire":
      return {
        type: POKEMON_TYPE.FIRE,
        image: fire,
      };
    case "water":
      return {
        type: POKEMON_TYPE.WATER,
        image: water,
      };
    case "grass":
      return {
        type: POKEMON_TYPE.GRASS,
        image: grass,
      };
    case "electric":
      return {
        type: POKEMON_TYPE.ELECTRIC,
        image: electric,
      };
    case "ice":
      return {
        type: POKEMON_TYPE.ICE,
        image: ice,
      };
    case "fighting":
      return {
        type: POKEMON_TYPE.FIGHTING,
        image: fighting,
      };
    case "poison":
      return {
        type: POKEMON_TYPE.POISON,
        image: poison,
      };
    case "ground":
      return {
        type: POKEMON_TYPE.GROUND,
        image: ground,
      };
    case "flying":
      return {
        type: POKEMON_TYPE.FLYING,
        image: flying,
      };
    case "psychic":
      return {
        type: POKEMON_TYPE.PSYCHIC,
        image: psychic,
      };
    case "bug":
      return {
        type: POKEMON_TYPE.BUG,
        image: bug,
      };
    case "rock":
      return {
        type: POKEMON_TYPE.ROCK,
        image: rock,
      };
    case "ghost":
      return {
        type: POKEMON_TYPE.GHOST,
        image: ghost,
      };
    case "dark":
      return {
        type: POKEMON_TYPE.DARK,
        image: dark,
      };
    case "dragon":
      return {
        type: POKEMON_TYPE.DRAGON,
        image: dragon,
      };
    case "steel":
      return {
        type: POKEMON_TYPE.STEEL,
        image: steel,
      };
    case "fairy":
      return {
        type: POKEMON_TYPE.FAIRY,
        image: fairy,
      };
    default:
      return {
        type: POKEMON_TYPE.NORMAL,
        image: normal,
      };
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
