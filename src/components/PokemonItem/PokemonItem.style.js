import styled from "styled-components";
import Color from "../../styles/Color";
import Media from "../../styles/Media";
import { SetFont, TextSize, TextWeight } from "../../styles/Mixin";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  width: 100%;
  height: 105px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 20px;

  ${Media.tab`
        height: 150px;
    `}
`;

export const Item = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.pokemontheme.color.light};
  border-radius: 20px;
  justify-content: flex-end;

  ${Media.tab`
        height: 150px;
        justify-content: space-between;
    `}
`;

export const ItemImg = styled.img`
  width: 75%;
  position: absolute;
  right: 0;
  top: -35px;

  ${Media.tab`
        width: 150px;
        top: -40px;
    `}
`;

export const ItemDesc = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.pokemontheme.color.primary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;

  ${Media.tab`
        padding: 15px;
    `}

  p {
    ${SetFont({
      size: TextSize.bodySm,
      weight: TextWeight.medium,
      color: Color.white,
    })}

    ${Media.tab`
            ${SetFont({
              size: TextSize.body,
              weight: TextWeight.medium,
              color: Color.white,
            })}
        `}
  }

  span {
    ${SetFont({
      size: TextSize.bodySm,
      weight: TextWeight.bold,
      color: Color.white,
    })}

    ${Media.tab`
            ${SetFont({
              size: TextSize.body,
              weight: TextWeight.bold,
              color: Color.white,
            })}
        `}
  }
`;

export const ItemType = styled.div`
  display: none;

  ${Media.tab`
        padding: 20px 0 0 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        div {
            display: flex;
            margin-bottom: 10px;

            img {
                width: 20px;
                margin-right: 8px;
                flex-shrink: 0;
            }

            span {
                ${SetFont({
                  size: TextSize.bodySm,
                  color: Color.white,
                  weight: TextWeight.bold,
                })}
            }
        }
    `}
`;
