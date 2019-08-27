import React from "react";

class Pet extends React.Component {
  disabled = () => {
    return <button className="ui disabled button">Already adopted</button>;
  };
  adoptable = () => {
    return (
      <button
        data-id={`${this.props.pet.id}`}
        className="ui primary button"
        onClick={this.props.onAdoptPet}
      >
        Adopt pet
      </button>
    );
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/* '♀' OR '♂' */}
            {this.props.pet.gender === "male" ? "♂" : "♀"}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === true
            ? this.disabled()
            : this.adoptable()}
        </div>
      </div>
    );
  }
}

export default Pet;
