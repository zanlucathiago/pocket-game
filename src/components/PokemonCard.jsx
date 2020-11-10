import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import pokemons from '../static/pokemons';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PokemonCard({ badge, pokemon, filter, badgeColor }) {
  const classes = useStyles();

  const renderCard = () => {
    return (
      <Card
        className={classes.root}
        style={{
          height: 135,
          width: 113,
          position: 'relative',
          backgroundColor: 'rgba(223,223,223,0.875)',
        }}
      >
        <CardActionArea style={{ position: 'static', display: 'flex' }}>
          <CardMedia
            className={classes.media}
            image={`/pokemons/${pokemons[pokemon].image}.gif`}
            style={{
              backgroundSize: 'contain',
              flex: 1,
              height: 113,
              filter: `grayscale(${filter ? 1 : 0})`,
            }}
          />
          <Typography
            variant="overline"
            display="block"
            style={{ position: 'absolute', bottom: 0 }}
          >
            {pokemons[pokemon].name}
          </Typography>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <div style={{ padding: 8 }}>
      {badge ? (
        <Badge badgeContent={badge} color={badgeColor}>
          {renderCard()}
        </Badge>
      ) : (
        renderCard()
      )}
    </div>
  );
}
