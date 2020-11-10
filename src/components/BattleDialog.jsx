import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import pokemons from '../static/pokemons';
import { savePokemon, seenPokemon } from '../helpers/LocalStorage';

export default function BattleDialog({ handleClose, level, message, pokemon }) {
  return (
    <Dialog
      disableBackdropClick
      fullScreen
      open
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        style: { backgroundColor: 'transparent' },
      }}
    >
      <DialogTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#FFF',
            opacity: 0.875,
          }}
        >
          <div style={{ flex: 1, marginLeft: 8 }}>{pokemons[pokemon].name}</div>
          <div style={{ marginRight: 8 }}>Lv. {level}</div>
          {!seenPokemon(pokemon) ? (
            <div style={{ width: 31 }} />
          ) : (
            <img
              alt="pokeball"
              src="/pokeball.png"
              style={{
                height: 31,
                width: 31,
              }}
            ></img>
          )}
        </div>
      </DialogTitle>
      <DialogContent style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <img
            alt={pokemons[pokemon].name}
            src={`/pokemons/${pokemons[pokemon].image}.gif`}
            style={{
              transform: 'scale(0.375)',
            }}
          ></img>
        </div>
      </DialogContent>
      <DialogActions
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Button
          variant="contained"
          onClick={() => {
            let random = Math.random();
            const { capture, flee } = pokemons[pokemon].rate;

            if (random < capture) {
              savePokemon({ level, pokemon });
              message('O pokémon foi capturado!');
              handleClose();
            } else {
              let random2 = Math.random();

              if (random2 < flee) {
                message('O pokémon fugiu!');
                handleClose();
              } else {
                message('A captura falhou, tente novamente!');
              }
            }
          }}
          color="primary"
          autoFocus
        >
          Pokébola!
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Mochila
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Ajuda
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Fugir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
