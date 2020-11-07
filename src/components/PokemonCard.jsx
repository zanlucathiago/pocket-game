import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pokemons from '../static/pokemons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PokemonCard({ pokemon }) {
  const classes = useStyles();

  return (
    <div style={{ padding: 8 }}>
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
            style={{ backgroundSize: 'contain', flex: 1, height: 113 }}
            // title="Contemplative Reptile"
          />
          <Typography
            variant="overline"
            display="block"
            // gutterBottom
            style={{ position: 'absolute', bottom: 0 }}
          >
            {pokemons[pokemon].name}
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}
