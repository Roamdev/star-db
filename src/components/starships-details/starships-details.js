/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

import './starships-details.scss';


import SwapiService from '../../services/swapi/swapi-service';
import Spinner from '../spinner'


export default class StarshipsDetails extends Component {
  swapiService = new SwapiService();

  state = {
    starships: {
      name: null,
      model: null,
      manufacturer : null,
      costInCredits: null,
      lengthcrew: null,
      passengers: null,
      cargoCapacity: null
    }
  }

  componentDidMount() {
    this.updateStarships();
  }
  componentDidUpdate(prevProps) {
    if (this.props.starshipsId !== prevProps.starshipsId) {
      this.updateStarships();
    };
  }

  updateStarships() {
    const {starshipsId} = this.props;
    if (!starshipsId) {
      return;
    }
    this.swapiService
      .getStarships(starshipsId)
      .then((starships) => {
        this.setState({starships});
      });
  }

  onPersonLoaded = (starships) => {
    this.setState({starships});
  }

  render() {
    const {name,model,manufacturer ,costInCredits,lengthcrew,passengers,cargoCapacity} = this.state.starships;
    if(!name) {
      return <Spinner/>
    }
    return(
      <div className="starships-details card">
        <img
          className="starships-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${this.props.starshipsId}.jpg`}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model:</span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufacturer:</span>
              <span>{manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Lengthcrew:</span>
              <span>{lengthcrew}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Passengers:</span>
              <span>{passengers}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cargo Capacity:</span>
              <span>{cargoCapacity}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cost In Credits:</span>
              <span>{costInCredits}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}