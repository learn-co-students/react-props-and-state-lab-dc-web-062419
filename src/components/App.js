import React from "react";
import "../data/pets.js";
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

  // handleChange = () => {
  //   this.setState({
  //     filters: Object.assign({}, this.state.filters, {
  //       type: event.currentTarget.value
  //     })
  //   });
  // };

  render() {
    // console.log(this.state.filters);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={event => {
                  return this.setState({
                    filters: Object.assign({}, this.state.filters, {
                      type: event.currentTarget.value
                    })
                  });
                }}
                onFindPetsClick={event => {
                  let type = this.state.filters.type;
                  if (type !== "all") {
                    fetch(`/api/pets?type=${type}`)
                      .then(res => res.json())
                      .then(data => {
                        return this.setState({
                          pets: data
                        });
                      });
                  } else {
                    fetch(`/api/pets`)
                      .then(res => res.json())
                      .then(data => {
                        return this.setState({
                          pets: data
                        });
                      });
                  }
                }}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={event => {
                  let petId = event.currentTarget.dataset.id;
                  let arr = [];
                  this.state.pets.forEach(pet => {
                    if (pet.id === petId) {
                      pet.isAdopted = true;
                      arr.push(pet);
                    } else {
                      arr.push(pet);
                    }
                  });

                  this.setState({
                    ...this.state,
                    pets: arr
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
