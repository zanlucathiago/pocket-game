import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputIcon from '@material-ui/icons/Input';

const directions = {
  north: {
    icon: <ArrowUpwardIcon />,
    name: 'Norte',
  },
  south: {
    icon: <ArrowDownwardIcon />,
    name: 'Sul',
  },
  east: {
    icon: <ArrowForwardIcon />,
    name: 'Leste',
  },
  west: {
    icon: <ArrowBackIcon />,
    name: 'Oeste',
  },
  accessTo: {
    icon: <InputIcon />,
    name: 'Acesso a',
  },
};

export default directions;
