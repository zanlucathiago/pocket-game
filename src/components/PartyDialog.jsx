import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PokemonCard from './PokemonCard';
import { getParty } from '../helpers/LocalStorage';

export default function PartyDialog({ handleClose, openBoxDialog }) {
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
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {getParty().map(({ pokemon, level }) => (
            <PokemonCard pokemon={pokemon} level={level} />
          ))}
        </div>
      </DialogContent>
      <DialogActions
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Button
          autoFocus
          onClick={openBoxDialog}
          color="primary"
          variant="contained"
        >
          Caixa
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
