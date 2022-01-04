import React, {Component} from 'react';
import PersonDetails from '../person-details'
import ItemList from '../item-list'
import ErrorIndicator from '../error-indicator';



export default class PeoplePanel extends Component {
  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidMount() {
    const randomIdPerson = Math.floor(Math.random()*83) + 1;
    this.setState({
      selectedPerson: randomIdPerson
    })
    if(randomIdPerson === 17) {
      this.setState({
        selectedPerson: 66
      })
    }
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
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
            onItemSelected={this.onPersonSelected}
            getData={this.props.getPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }

}