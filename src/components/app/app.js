import React from 'react';

import Header from '../header'
import PersondDetails from '../person-details'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'


import './app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
     
			<div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersondDetails />
        </div>
      </div>
    </div>
  )
}

export default App;