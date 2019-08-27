import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map(pet => {
      return (
        <div className="ui cards">
          <Pet
            pet={pet}
            onAdoptPet={this.props.onAdoptPet}
            id={pet.id}
            key={pet.id}
          />
        </div>
      );
    });
  }
}

export default PetBrowser;
