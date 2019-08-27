import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  getPets = () => { 
   return this.props.pets.map(pet => <Pet key={pet.id} gender={pet.gender} type={pet.type} age={pet.age} weight={pet.weight} name={pet.name} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} petObj={pet}/>
    )
  }
  render() {
    return (
    <div className="ui cards">
      {this.getPets()}
    </div>
    )
  }
}

export default PetBrowser
