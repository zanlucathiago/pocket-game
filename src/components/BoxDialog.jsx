import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PokemonCard from './PokemonCard';
import { getBox } from '../helpers/LocalStorage';

export default function BoxDialog({ handleClose }) {
  return (
    <Dialog
      disableBackdropClick
      fullScreen
      open
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
      }}
    >
      <DialogContent
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {getBox().map(({ badge, pokemon, level }) => (
          <PokemonCard badge={badge} pokemon={pokemon} level={level} />
        ))}
      </DialogContent>
      <DialogActions
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
