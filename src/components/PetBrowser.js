import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <>
        {this.props.pets.map(pet => (
          <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
        ))}
      </>
    );
  }
}

export default PetBrowser;
