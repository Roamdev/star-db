import React, {Component} from 'react';

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi/swapi-service';
import PeoplePanel from '../people-panel';
// import StarshipsPanel from '../starships-panel';
// import PlanetPanel from '../planet-panel';



import './app.scss';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    hasError: false
  }


  componentDidCatch() {
    this.setState({hasError: true});
  }

  render(){
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div>
          <Header />
          <RandomPlanet />
          <PeoplePanel getPeople = {this.swapiService.getAllStarships} />
          {/* <StarshipsPanel getDate = {this.swapiService.getAllStarship} /> */}
          {/* <PlanetPanel getDate = {this.swapiService.getAllPlanet} /> */}
      </div>
    )
  }
};