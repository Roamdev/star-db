import React, {Component} from 'react';
import StarshipsDetails from '../starships-details'
import ItemList from '../item-list'
import ErrorIndicator from '../error-indicator';



export default class StarshipsPanel extends Component {
  state = {
    selectedStarships: null,
    hasError: false
  }

  componentDidMount() {
    const randomIdStarships = Math.floor(Math.random()*16) + 2;
    this.setState({
      selectedStarships: randomIdStarships
    })
  }

  onStarshipsSelected = (id) => {
    this.setState({
      selectedStarships: id
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
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
            onItemSelected={this.onStarshipsSelected}
            getData={this.props.getStarships}
          />
        </div>
        <div className="col-md-6">
          <StarshipsDetails starshipsId={this.state.selectedStarships}/>
        </div>
      </div>
    )
  }

}