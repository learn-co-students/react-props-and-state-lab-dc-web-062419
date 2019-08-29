import React from "react";
import Pet from "./Pet";

// check out using functions instead of classes
const PetBrowser = props => {
  return (
    <div className="ui cards">
      {props.pets.map(pet => (
        <Pet key={pet.id} pet={pet} onAdoptPet={props.onAdoptPet} />
      ))}
    </div>
  );
};

export default PetBrowser;
