import React, {Component} from 'react';

import Header from '../header'
import PersondDetails from '../person-details'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'


import './app.scss';

export default class App extends Component {
  state = {
    selectedPerson: 1
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
    console.log(this.state.selectedPerson)
  };

  render(){
    return (
      <div>
          <Header />
          <RandomPlanet />
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}/>
            </div>
            <div className="col-md-6">
              <PersondDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
      </div>
    )
  }
};