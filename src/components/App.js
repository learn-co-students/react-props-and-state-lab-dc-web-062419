import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updatePets = (pets_array) => {
    this.setState({
      ...this.state,
      pets: pets_array
    })
  }

  onChangeType = (newType) => {
    this.setState({
      ...this.state,
      filters: {
        type: newType
      }
    })
  }

  onAdoptPet = (id) => {
  const newPets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
  this.setState({
    ...this.state,
    pets: newPets
  })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    if(this.state.filters.type !== 'all') {
      url =  url + `?type=${this.state.filters.type}`
    }

    fetch(url).then(resp => resp.json()).then(pets => {console.log(pets); console.log(this); this.updatePets(pets)})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
