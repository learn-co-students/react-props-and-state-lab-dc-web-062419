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

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all'){
      //we are setting url equal to the old url + the type
      url +=`?type=${this.state.filters.type}` 
    } 
      fetch(url)
      .then(res => res.json())
      .then(pets=> {
        this.setState({
          pets: pets
        })
      })
    }

    onAdoptPet = (id) => {
        const pets = this.state.pets.map(pet => {
          if (pet.id === id){
            pet.isAdopted = true
          }
          return pet
        })
        this.setState({
          pets: pets
        })
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
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
