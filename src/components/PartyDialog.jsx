import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import PokemonCard from './PokemonCard';
// import pokemons from '../static/pokemons';
// import { getParty, getPokemon } from '../helpers/LocalStorage';
import { getParty } from '../helpers/LocalStorage';

export default function PartyDialog({ handleClose, level, message, pokemon }) {
  return (
    <Dialog
      disableBackdropClick
      fullScreen
      open
      onClose={handleClose}
      // aria-labelledby="alert-dialog-title"
      // aria-describedby="alert-dialog-description"
      PaperProps={{
        elevation: 0,
        // style: { backgroundColor: 'transparent', margin: 0 },
        style: { backgroundColor: 'transparent' },
      }}
    >
      {/**nome, genero, level, cp */}
      {/* <DialogTitle id="alert-dialog-title">
        Um {pokemons[pokemon].name} apareceu!
      </DialogTitle> */}
      <DialogContent
        style={{
          display: 'flex',
          // justifyContent: 'space-around',
          // flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          // padding: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            // flexDirection: 'column',
            // justifyContent: 'center',
          }}
        >
          {getParty().map(({ pokemon, level }) => (
            <PokemonCard pokemon={pokemon} level={level} />
          ))}
        </div>
      </DialogContent>
      <DialogActions
        // style={{ padding: 0, display: 'flex', justifyContent: 'space-around' }}
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Button
          autoFocus
          onClick={handleClose}
          color="primary"
          variant="contained"
        >
          Pokémon
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Mover
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
