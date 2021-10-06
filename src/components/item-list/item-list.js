import React, {Component} from 'react';

import './item-list.scss'
import SwapiService from '../../services/swapi/swapi-service';
import Spinner from '../spinner'


export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    itemList: null // []
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((itemList) => {
        this.setState({itemList})
      })
  }


  renderItems(arr){
    return(
      arr.map(({id,name}) => {
        return (
          <li 
            className="list-group-item"
            key={id}
            onClick={() => this.propsOnItemSelected(id)}
            >
            {name}
          </li>
        );
      })
    )
  };

  render() {
    const {itemList} = this.state;

    if(!itemList) {
      return <Spinner/>
    }

    return(
      <ul className="item-list list-group">
          {this.renderItems(itemList)}
      </ul>
    )
  }
}