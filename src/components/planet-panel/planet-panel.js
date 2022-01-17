import React, {Component} from 'react';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';

import ErrorIndicator from '../error-indicator';


export default class PlanetPanel extends Component {
  state = {
    selectedPlanet: null,
    hasError: false
  }

  componentDidMount() {
    const randomIdPlanet = Math.floor(Math.random()*10) + 1;
    this.setState({
      selectedPlanet: randomIdPlanet
    })
  }


  onPlanetSelected = (id) => {
    this.setState({selectedPlanet: id})
  };

  componentDidCatch() {
    this.setState({
      hasError:true
    })
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    }
    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
            onItemSelected={this.onPlanetSelected}
            getData={this.props.getPlanet}
          />
        </div>
        <div className="col-md-6">
          <PlanetDetails planetId={this.state.selectedPlanet}/>
        </div>
      </div>

    )
  }
}