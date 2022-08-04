import React, { useState, useEffect } from "react";
import { Heading, Item, ItemList, Wrapper } from "./PokemonCollection.style";
import useAppContext from "../../hooks/useAppContext";
import WarningBox from "../../components/WarningBox";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { useNavigate } from "react-router-dom";

const variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: "100px" },
};

const PokemonCollection = () => {
  const [mounted, setMounted] = useState(false);

  const { pokemonDeck, removePokemonFromDeck } = useAppContext();
  const navigate = useNavigate();

  const item = () =>
    pokemonDeck.length &&
    pokemonDeck.map((el, index) => {
      return (
        <Item key={el.id} animate={mounted ? "open" : "close"} initial="close" variants={variants}>
          <img src={el.image} alt={`${el.name}-${el.nickname}`} />
          <span className="title">{el.nickname.replaceAll("-", " ")}</span>
          <span className="subtitle">{el.name.replaceAll("-", " ")}</span>

          <div className="type">
            <span onClick={() => removePokemonFromDeck(el.nickname)}>Delete</span>
            <span onClick={() => navigate("/pokemon/" + el.name)}>Detail</span>
          </div>
        </Item>
      );
    });

  useEffect(() => {
    // setTimeout(() => {
    //     setMounted(true)
    // }, 2000);
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <button
        onClick={handleLogout}
        className="bg-yellow-400 text-white px-3 py-2 mb-2 mt-8 w-1/3 self-center text-lg font-semibold hover:bg-yellow-500"
      >
        Sign Out
      </button>
      <Heading>
        <h2>My Pokemons</h2>
      </Heading>
      <ItemList>
        {pokemonDeck.length > 0 ? item() : <WarningBox>You don't have any pokemon.</WarningBox>}
      </ItemList>
    </Wrapper>
  );
};

export default PokemonCollection;
