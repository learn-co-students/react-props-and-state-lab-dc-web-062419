import React from "react";
import Pet from "./Pet"
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

  onChangeType = type => {
    this.setState({
      filters: type
    });
  };

  onFindPetsClick = event => {
    if (this.state.filters.type === "all") {
      return fetch(`/api/pets`)
        .then(res => res.json())
        .then(res => {
            this.setState({
              pets: res
            })
        });
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            pets: res
          })
      });
    }
  };

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });

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
                onChangeType={event => this.onChangeType(event)}
                onFindPetsClick={event => this.onFindPetsClick(event)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
