import { v4 } from 'uuid';
import pokemons from '../static/pokemons';

const key = '27988d30-a0b4-4b76-92b5-56694a4500c0';

function getData() {
  const pokemonData = localStorage.getItem(key);
  const parsedData = pokemonData ? JSON.parse(pokemonData) : {};
  const pokemonBox = parsedData.pokemonBox || [];
  const pokemonParty = parsedData.pokemonParty || [];
  const pokemonSeen = parsedData.pokemonSeen || [];
  return { pokemonBox, pokemonParty, pokemonSeen };
}

function setData(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function savePokemon({ pokemon, level }) {
  const { pokemonBox, pokemonParty, pokemonSeen } = getData();
  const id = v4();

  setData({
    pokemonBox: [...pokemonBox, { pokemon, level, id }],
    pokemonParty: [...pokemonParty, ...(pokemonParty.length < 6 ? [id] : [])],
    pokemonSeen,
  });
}

export function seenPokemon(pokemon) {
  const { pokemonBox, pokemonParty, pokemonSeen } = getData();

  setData({
    pokemonBox,
    pokemonParty,
    pokemonSeen: { ...pokemonSeen, [pokemon]: true },
  });

  return pokemonBox.some((pkmn) => pkmn.pokemon === pokemon);
}

export function getBox() {
  const { pokemonBox, pokemonParty } = getData();

  return pokemonBox.map((pkmn) => ({
    ...pkmn,
    badge: pokemonParty.indexOf(pkmn.id) + 1,
  }));
}

export function hasPokemon(pokemon) {
  const { pokemonBox } = getData();
  return pokemonBox.some((pkmn) => pkmn.pokemon === pokemon);
}

export function getIndex() {
  const { pokemonBox, pokemonSeen } = getData();
  const helper = {};
  let idx = 0;

  return Object.keys(pokemons).map((pkmn) => {
    const { image, number } = pokemons[pkmn];

    const unknown = {
      pokemon: pkmn,
      number,
    };

    const caught = {
      ...unknown,
      image,
    };

    const seen = {
      ...caught,
      filter: true,
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

    return pokemonSeen[pkmn] ? seen : unknown;
  });
}

export function getParty() {
  const { pokemonBox, pokemonParty } = getData();
  return pokemonParty.map((id) => pokemonBox.find((pkmn) => pkmn.id === id));
}
