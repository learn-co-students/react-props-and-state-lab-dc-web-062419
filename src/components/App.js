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
onFindPetsClick = () =>{
  debugger
  if (this.state.filters.type !== 'all'){
  fetch(`/api/pets?type=${this.state.filters.type}`)
  .then(res => res.json())
  .then(petsArray => this.setState({
    pets: petsArray
  }))
  }
  else{
    fetch('/api/pets')
    .then(res => res.json())
    .then(petsArray =>  this.setState({
      pets: petsArray
    }))}
}

   onChangeType = (event) =>{
     this.setState({
       filters: {...this.filters, type: event.target.value}
     })
   }

   onAdoptPet = (petId) =>{
     const petArray =this.state.pets.map(pet => {
      if(petId===pet.id){
      pet.isAdopted = true
      return pet}
      else{
        return pet
     }})
     this.setState({
       ...this.state,
       pets: petArray
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
              <Filters onChangeType= {this.onChangeType} 
              onFindPetsClick= {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
