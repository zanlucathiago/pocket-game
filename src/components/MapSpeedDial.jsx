import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import ExploreIcon from '@material-ui/icons/Explore';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import directions from '../static/directions';
import locations from '../static/locations';

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(3),
    height: 380,
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

export default function MapSpeedDial({ location, explore }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (e) => {
    if (e.type !== 'focus') {
      setOpen(true);
    }
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      hidden={false}
      icon={<ExploreIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={'up'}
      style={{ left: 16, right: 'auto' }}
    >
      {locations[location].exits.map((exit) => (
        <SpeedDialAction
          key={exit.destination}
          icon={directions[exit.direction].icon}
          style={{ whiteSpace: 'nowrap' }}
          tooltipOpen
          tooltipPlacement="right"
          tooltipTitle={locations[exit.destination].label}
          onClick={() => {
            explore(exit.destination);
          }}
        />
      ))}
    </SpeedDial>
  );
}
