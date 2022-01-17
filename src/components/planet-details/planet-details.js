/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

import './planet-details.scss'

import Spinner from '../spinner'
import SwapiService from '../../services/swapi/swapi-service';




export default class PlanetPanel extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {
      population: null,
      rotationPeriod: null,
      diameter: null,
      name :null
    }
  }

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if(this.props.planetId !== prevProps.planetId) {
      this.updatePlanet();
    }
  }

  updatePlanet() {
    const {planetId} = this.props;
    if (!planetId) {
      return;
    }
    this.swapiService
      .getPlanet(planetId)
      .then((planet) => {
        this.setState({planet})
      })
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet})
  }



  render() {
    const {population,rotationPeriod,diameter,name} = this.state.planet
    if(!name) {
      return <Spinner/>
    }
    return (
      <div className="planet-details card">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${this.props.planetId}.jpg`}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population:</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period:</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}