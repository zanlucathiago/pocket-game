import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Switch from '@material-ui/core/Switch';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
// import PrintIcon from '@material-ui/icons/Print';
import LocalMallIcon from '@material-ui/icons/LocalMall';
// import ShareIcon from '@material-ui/icons/Share';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LanguageIcon from '@material-ui/icons/Language';
// import FavoriteIcon from '@material-ui/icons/Favorite';

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

export default function MenuSpeedDial({ openPartyDialog }) {
  const classes = useStyles();
  // const [direction, setDirection] = React.useState('up');
  const [open, setOpen] = React.useState(false);
  // const [hidden, setHidden] = React.useState(false);

  // const handleDirectionChange = (event) => {
  //   setDirection(event.target.value);
  // };

  // const handleHiddenChange = (event) => {
  //   setHidden(event.target.checked);
  // };

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
    { icon: <LibraryBooksIcon />, name: 'Enciclopédia' },
  ];

  return (
    // <div className={classes.root}>
    //   <FormControlLabel
    //     control={
    //       <Switch
    //         checked={hidden}
    //         onChange={handleHiddenChange}
    //         color="primary"
    //       />
    //     }
    //     label="Hidden"
    //   />
    //   <FormLabel className={classes.radioGroup} component="legend">
    //     Direction
    //   </FormLabel>
    //   <RadioGroup
    //     aria-label="direction"
    //     name="direction"
    //     value={direction}
    //     onChange={handleDirectionChange}
    //     row
    //   >
    //     <FormControlLabel value="up" control={<Radio />} label="Up" />
    //     <FormControlLabel value="right" control={<Radio />} label="Right" />
    //     <FormControlLabel value="down" control={<Radio />} label="Down" />
    //     <FormControlLabel value="left" control={<Radio />} label="Left" />
    //   </RadioGroup>
    // <div className={classes.exampleWrapper}>
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
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
    // </div>
    // </div>
  );
}
