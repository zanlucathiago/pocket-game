import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import pokemons from '../static/pokemons';
import { savePokemon } from '../helpers/LocalStorage';

export default function BattleDialog({ handleClose, level, message, pokemon }) {
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
      <DialogTitle id="alert-dialog-title">
        Um {pokemons[pokemon].name} apareceu!
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
              // maxWidth: '160px',
              // maxHeight: '95px',
              // width: '100%',
              // height: '50%',
              // objectFit: 'contain',
              transform: 'scale(0.375)',
            }}
            // src={`/pokemon/${String(pokemons[pokemon].number).padStart(
            //   3,
            //   '0'
            // )}-${pokemon}.gif`}
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
            // let message;
            const { capture, flee } = pokemons[pokemon].rate;
            // method.spawns.some(({ level, pokemon, rate }) => {
            if (random < capture) {
              // const [min, max] = level;
              savePokemon({ level, pokemon });

              message('O pokémon foi capturado!');
              // message = `Um ${pokemons[pokemon].name} Lv. ${
              //   min + Math.floor(random / (rate / (max - min + 1)))
              // } selvagem apareceu!`;
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
