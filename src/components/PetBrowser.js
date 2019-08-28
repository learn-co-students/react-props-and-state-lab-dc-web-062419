import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // debugger
    return <div className="ui cards">
      {this.props.petSet.map(pet => <Pet name={pet.name} weight={pet.weight} age={pet.age} type={pet.type} isAdopted={pet.isAdopted}/> ) }
    </div>
  }
}

export default PetBrowser
