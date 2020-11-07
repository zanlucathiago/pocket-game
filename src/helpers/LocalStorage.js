import { v4 } from 'uuid';

const key = '27988d30-a0b4-4b76-92b5-56694a4500c0';

function getData() {
  const pokemonData = localStorage.getItem(key);
  const parsedData = pokemonData ? JSON.parse(pokemonData) : {};
  const pokemonBox = parsedData.pokemonBox || [];
  const pokemonParty = parsedData.pokemonParty || [];
  return { pokemonBox, pokemonParty };
}

function setData(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function savePokemon({ pokemon, level }) {
  const { pokemonBox, pokemonParty } = getData();
  const id = v4();

  setData({
    pokemonBox: [...pokemonBox, { pokemon, level, id }],
    pokemonParty: [...pokemonParty, ...(pokemonParty.length < 6 ? [id] : [])],
  });
}

export function getBox() {
  // const pokemonData = localStorage.getItem(key);
  // const { pokemonBox } = JSON.parse(pokemonData) || {};
  // return pokemonBox || [];
  // const { pokemonBox } = getData();
  return getData().pokemonBox;
}

export function getParty() {
  const { pokemonBox, pokemonParty } = getData();
  return pokemonParty.map((id) => pokemonBox.find((pkmn) => pkmn.id === id));
  // const pokemonData = localStorage.getItem(key);
  // return pokemonData ? JSON.parse(pokemonData) : [];
}
