import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SaveIcon from '@material-ui/icons/Save';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LanguageIcon from '@material-ui/icons/Language';

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

export default function MenuSpeedDial({ openIndexDialog, openPartyDialog }) {
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

  const actions = [
    { icon: <SaveIcon />, name: 'Salvamento' },
    { icon: <LanguageIcon />, name: 'Conexão' },
    { icon: <GroupWorkIcon />, name: 'Time', onClick: openPartyDialog },
    { icon: <LocalMallIcon />, name: 'Mochila' },
    {
      icon: <LibraryBooksIcon />,
      name: 'Enciclopédia',
      onClick: openIndexDialog,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      FabProps={{ color: 'secondary' }}
      hidden={false}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={'up'}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipOpen
          tooltipTitle={action.name}
          onClick={() => {
            action.onClick();
            handleClose();
          }}
        />
      ))}
    </SpeedDial>
  );
}
