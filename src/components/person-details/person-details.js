/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

import './person-details.scss';

import SwapiService from '../../services/swapi/swapi-service';
import Spinner from '../spinner'


export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: {
      name: null,
      height: null,
      mass: null,
      hairColor: null,
      skinColor: null,
      eyeColor: null,
      birthYear: null,
      gender: null,
      homeworld: null,
      films: null,
      species: null,
      vehicles: null,
      starships: null
    }
  }

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    };
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }
    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({person});
      });
  }

  onPersonLoaded = (person) => {
    this.setState({person});
  }

  render() {
    const {name,height,mass,hairColor,skinColor,eyeColor,birthYear,gender} = this.state.person;
    if(!name) {
      return <Spinner/>
    }
    return(
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height:</span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Mass:</span>
              <span>{mass}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Hair Color:</span>
              <span>{hairColor}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Skin Color:</span>
              <span>{skinColor}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}