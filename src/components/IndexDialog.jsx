import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PokemonCard from './PokemonCard';
import { getIndex } from '../helpers/LocalStorage';
import { Card, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function IndexDialog({ handleClose }) {
  const classes = useStyles();

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
        {getIndex().map(({ image, pokemon, number, filter }) =>
          image ? (
            <PokemonCard
              pokemon={pokemon}
              filter={!!filter}
              badge={
                !filter && (
                  <img
                    alt="pokeball"
                    src="/pokeball.png"
                    style={{
                      height: 31,
                      width: 31,
                    }}
                  ></img>
                )
              }
              badgeColor=""
            />
          ) : (
            <div style={{ padding: 8 }}>
              <Card
                className={classes.root}
                style={{
                  display: 'flex',
                  height: 135,
                  justifyContent: 'center',
                  width: 113,
                  position: 'relative',
                  backgroundColor: 'rgba(223,223,223,0.875)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography display="block" variant="button">
                    {number}
                  </Typography>{' '}
                </div>
              </Card>
            </div>
          )
        )}
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
