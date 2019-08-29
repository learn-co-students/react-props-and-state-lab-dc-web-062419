import React from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = val => {
    this.setState({ filters: { type: val } });
  };

  onFetch = data => {
    this.setState({ pets: data });
  };

  onFindPetsClick = () => {
    let qp;
    switch (this.state.filters.type) {
      case "cat":
        qp = "?type=cat";
        break;
      case "dog":
        qp = "?type=dog";
        break;
      case "micropig":
        qp = "?type=micropig";
        break;
      default:
        qp = "";
    }
    fetch(`/api/pets${qp}`)
      .then(resp => resp.json())
      .then(data => this.onFetch(data));
  };

  onAdoptPet = id => {
    const pets = this.state.pets.map(pet => 
      pet.id === id ? {...pet, isAdopted: true} : pet  // check out this spreader
      )
    this.setState({pets});
  };

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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
