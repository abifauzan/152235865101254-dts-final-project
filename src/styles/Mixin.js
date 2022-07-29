import { css } from "styled-components";
import { POKEMON_TYPE } from "../utils/constant";
import { getThemePokemon } from "../utils/util";
import Color from "./Color";

export const TextSize = {
  headingLg: "32px",
  headingNav: "20px",
  headingBox: "26px",
  headingTitle: "22px",
  body: "18px",
  bodySm: "14px",
  bodyXs: "12px",
};

export const TextWeight = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "600",
};

export const GetColor = (type) => {
  const { type: getTheme } = getThemePokemon(type);

  switch (getTheme) {
    case POKEMON_TYPE.NORMAL:
      return {
        primary: Color.normal.primary,
        light: Color.normal.light,
      };
    case POKEMON_TYPE.FIRE:
      return {
        primary: Color.fire.primary,
        light: Color.fire.light,
      };
    case POKEMON_TYPE.WATER:
      return {
        primary: Color.water.primary,
        light: Color.water.light,
      };
    case POKEMON_TYPE.GRASS:
      return {
        primary: Color.grass.primary,
        light: Color.grass.light,
      };
    case POKEMON_TYPE.ELECTRIC:
      return {
        primary: Color.electric.primary,
        light: Color.electric.light,
      };
    case POKEMON_TYPE.ICE:
      return {
        primary: Color.ice.primary,
        light: Color.ice.light,
      };
    case POKEMON_TYPE.FIGHTING:
      return {
        primary: Color.fighting.primary,
        light: Color.fighting.light,
      };
    case POKEMON_TYPE.POISON:
      return {
        primary: Color.poison.primary,
        light: Color.poison.light,
      };
    case POKEMON_TYPE.GROUND:
      return {
        primary: Color.ground.primary,
        light: Color.ground.light,
      };
    case POKEMON_TYPE.FLYING:
      return {
        primary: Color.flying.primary,
        light: Color.flying.light,
      };
    case POKEMON_TYPE.PSYCHIC:
      return {
        primary: Color.psychic.primary,
        light: Color.psychic.light,
      };
    case POKEMON_TYPE.BUG:
      return {
        primary: Color.bug.primary,
        light: Color.bug.light,
      };
    case POKEMON_TYPE.ROCK:
      return {
        primary: Color.rock.primary,
        light: Color.rock.light,
      };
    case POKEMON_TYPE.GHOST:
      return {
        primary: Color.ghost.primary,
        light: Color.ghost.light,
      };
    case POKEMON_TYPE.DARK:
      return {
        primary: Color.dark.primary,
        light: Color.dark.light,
      };
    case POKEMON_TYPE.DRAGON:
      return {
        primary: Color.dragon.primary,
        light: Color.dragon.light,
      };
    case POKEMON_TYPE.STEEL:
      return {
        primary: Color.steel.primary,
        light: Color.steel.light,
      };
    case POKEMON_TYPE.FAIRY:
      return {
        primary: Color.fairy.primary,
        light: Color.fairy.light,
      };
    default:
      return {
        primary: Color.primary,
        light: Color.light,
      };
  }
};

export const SetGradient = (type, angle = 0) => {
  const color = GetColor(type);

  return {
    background: `linear-gradient(${angle}deg, ${color.light} 0%, ${color.primary} 70%)`,
  };
};

export const SetFont = ({
  size,
  color,
  weight = TextWeight.regular,
  lineHeight = "normal",
  letterSpacing = "normal",
}) => css`
  font-family: "Titillium Web", "sans-serif";
  font-size: ${size};
  color: ${color};
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;
