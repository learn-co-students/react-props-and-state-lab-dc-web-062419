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

  updateTypeFilter = (event)=>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  fetchPets = ()=>{
    let petsURL = '/api/pets'

    if (this.state.filters.type !== 'all') {
      petsURL += `?type=${this.state.filters.type}`
    }

    fetch(petsURL)
    .then(res => res.json())
    .then(petsArray => this.setState({
      pets: petsArray
    }))
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    })
    this.setState({pets})
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
            
              {/* setting props below */}
            
              <Filters 
                onChangeType={this.updateTypeFilter} 
                onFindPetsClick={this.fetchPets}  
              />
            </div>
            <div className="twelve wide column">
            
              {/* setting props below */}
            
              <PetBrowser 
                pets={this.state.pets} 
                onAdoptPet={this.onAdoptPet} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
