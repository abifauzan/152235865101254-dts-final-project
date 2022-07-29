import React, { useState, useEffect } from "react";
import { Ball, Button } from "./Pokeball.style";

const PokeBall = ({ success }) => {
  console.log("success", success);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 5000);
    }
  }, [animate]);

  return (
    <Ball onClick={() => setAnimate(true)} className={animate ? "animate" : ""}>
      <Button success={String(success)} className={animate ? "animate" : ""} />
    </Ball>
  );
};

export default PokeBall;
