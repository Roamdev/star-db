/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

import './person-details.scss';

import SwapiService from '../../services/swapi/swapi-service';


export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: {
      name: null,
      gender: null,
      birthYear: null,
      eyeColor: null
    }
  }

  constructor() {
    super();
    this.onPersonLoaded();
  }

  onPersonLoaded = (person) => {
    this.setState({person});
  }

  render() {
    const {person: {name, gender, birthYear,eyeColor}} = this.state;
    return(
      <div className="person-details card">
        <img
          className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}