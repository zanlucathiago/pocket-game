import { v4 } from 'uuid';
import pokemons from '../static/pokemons';

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
  const { pokemonBox, pokemonParty } = getData();

  return pokemonBox.map((pkmn) => ({
    ...pkmn,
    badge: pokemonParty.indexOf(pkmn.id) + 1,
  }));
}

export function getIndex() {
  const { pokemonBox } = getData();
  const helper = {};
  let idx = 0;

  return Object.keys(pokemons).map((pkmn) => {
    const { image, number } = pokemons[pkmn];

    const uncaught = {
      pokemon: pkmn,
      number,
    };

    const caught = {
      ...uncaught,
      image,
    };

    if (helper[pkmn]) {
      return caught;
    }

    while (pokemonBox.length > idx) {
      const { pokemon } = pokemonBox[idx];
      if (pokemon === pkmn) {
        return caught;
      }

      helper[pokemon] = true;
      idx += 1;
    }

    return uncaught;
  });
}

export function getParty() {
  const { pokemonBox, pokemonParty } = getData();
  return pokemonParty.map((id) => pokemonBox.find((pkmn) => pkmn.id === id));
}
