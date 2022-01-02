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
      gender: null,
      birthYear: null,
      eyeColor: null
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
    const {name, gender, birthYear,eyeColor} = this.state.person;
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