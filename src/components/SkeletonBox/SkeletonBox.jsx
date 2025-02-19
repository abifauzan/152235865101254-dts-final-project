import React from "react";
import LoadingBar from "../LoadingBar";
import { BoxFeature, BoxAll, BoxCollection, BoxPokemon } from "./SkeletonBox.style";

const SkeletonBox = ({ mode }) => {
  const setSkeletonBox = (mode) => {
    switch (mode) {
      case "feature":
        return (
          <BoxFeature>
            <LoadingBar />
          </BoxFeature>
        );
      case "collection":
        return (
          <BoxCollection>
            <LoadingBar />
          </BoxCollection>
        );
      case "pokemon":
        return (
          <BoxPokemon>
            <LoadingBar />
          </BoxPokemon>
        );
      default:
        return (
          <BoxAll>
            <LoadingBar />
          </BoxAll>
        );
    }
  };

  return setSkeletonBox(mode);
};

export default SkeletonBox;
