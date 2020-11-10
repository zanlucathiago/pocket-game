import { Button, ButtonGroup, Snackbar } from '@material-ui/core';
import React from 'react';
import './App.css';
import arena from './images/backgrounds/arena.jpg';
import canyon from './images/backgrounds/canyon.jpg';
import cave from './images/backgrounds/cave.jpg';
import city from './images/backgrounds/city.jpg';
import coast from './images/backgrounds/coast.jpg';
import forest from './images/backgrounds/forest.jpg';
import glacier from './images/backgrounds/glacier.jpg';
import volcano from './images/backgrounds/volcano.jpg';
import locations from './static/locations';
import MuiAlert from '@material-ui/lab/Alert';
import methods from './static/methods';
import areas from './static/areas';
import BattleDialog from './components/BattleDialog';
import MenuSpeedDial from './components/MenuSpeedDial';
import PartyDialog from './components/PartyDialog';
import BoxDialog from './components/BoxDialog';
import MapSpeedDial from './components/MapSpeedDial';
import IndexDialog from './components/IndexDialog';

const images = {
  arena,
  canyon,
  cave,
  city,
  coast,
  forest,
  glacier,
  volcano,
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// const backgroundImage = `url(${background})`;

class App extends React.Component {
  state = {
    location: 'palletTown',
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ message: null });
  };

  render() {
    const {
      boxDialog,
      indexDialog,
      location,
      found,
      message,
      partyDialog,
    } = this.state;

    return (
      <div
        style={{
          backgroundImage: `url(${images[locations[location].background]})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        {indexDialog && (
          <IndexDialog
            handleClose={() => this.setState({ indexDialog: null })}
          />
        )}
        {boxDialog && (
          <BoxDialog handleClose={() => this.setState({ boxDialog: null })} />
        )}
        {partyDialog && (
          <PartyDialog
            handleClose={() => this.setState({ partyDialog: null })}
            openBoxDialog={() =>
              this.setState({ boxDialog: true, partyDialog: null })
            }
          />
        )}
        <MenuSpeedDial
          openIndexDialog={() => this.setState({ indexDialog: true })}
          openPartyDialog={() => this.setState({ partyDialog: true })}
        />
        <MapSpeedDial
          key={location}
          openPartyDialog={() => this.setState({ partyDialog: true })}
          location={location}
          explore={(exit) => this.setState({ location: exit })}
        />
        {found && (
          <BattleDialog
            message={(value) => this.setState({ message: value })}
            pokemon={found.pokemon}
            level={found.level}
            handleClose={() => this.setState({ found: null })}
          />
        )}
        {message && (
          <Snackbar open autoHideDuration={2000} onClose={this.handleClose}>
            <Alert onClose={this.handleClose} severity="success">
              {message}
            </Alert>
          </Snackbar>
        )}
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          {(locations[location].areas || []).map((area) => (
            <ButtonGroup variant="contained">
              {area.area && <Button>{areas[area.area]}</Button>}
              {area.methods.map((method) => (
                <Button
                  onClick={() => {
                    let random = Math.random();
                    let message;

                    method.spawns.some(({ level, pokemon, rate }) => {
                      if (random < rate) {
                        const [min, max] = level;

                        message = {
                          pokemon,
                          level:
                            min + Math.floor(random / (rate / (max - min + 1))),
                        };

                        return true;
                      } else {
                        random -= rate;
                        return false;
                      }
                    });

                    this.setState({ found: message });
                  }}
                  color="secondary"
                >
                  {methods[method.method]}
                </Button>
              ))}
            </ButtonGroup>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
