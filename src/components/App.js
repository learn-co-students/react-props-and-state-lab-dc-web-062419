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

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              {/* <Filters onChangeType={() => {this.setState(this.state.filters: {type: 'dog' })}} */}
              
              <Filters onChangeType={(event) => { event.persist()
                              this.setState({filters: {type: event.target.value}})
                              // console.log(this.state)
                              // console.log(event.target.value)
              
                                            }}
              
                onFindPetsClick={ () => {
                            
                                  fetch('/api/pets')
                                    .then(res=> res.json())
                                    // .then(allPets => console.log(allPets))
                                    // .then(res => {
                                    //   debugger})
                                    // .then(console.log(this.state.filters.type))
                                    .then(allPets => allPets.filter(pet => {return pet.type == this.state.filters.type}))
                                    // .then(res => console.log(res))
                                    .then(somePets =>  this.setState({pets: somePets}))
                                    console.log(this.state)
                                  }
                                  }
                                    // document.getElementById("type").value
                                    
              />
            </div>
            <div className="twelve wide column">
              {/* <PetBrowser petSet={this.state.pets.filter(pet => {return pet.type == this.state.filters.type})}/> */}
              <PetBrowser petSet={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
