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

  findPet = (pet) => {
    let newPets = []
    let found = 0
    this.state.pets.forEach(animal => {
      if (animal === pet) {
        found = animal
        found.isAdopted = true
        newPets.push(found)
      } else {
        newPets.push(animal)
      }
    })
    return newPets
  }

  onAdoptPet = (pet) => {
    debugger
   let petsArray = this.findPet(pet)
   console.log(pet)
   console.log(petsArray)
   this.setState({
     ...this.state,
     pets: petsArray
   })
  debugger
  }

  // onAdoptPet = (pet) => {
  //  let index = this.state.pets.findIndex((x) => x.id === pet.id)
  //  this.state.pets[index] = pet
  // }

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
