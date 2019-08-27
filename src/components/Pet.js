import React from 'react';

class Pet extends React.Component {
  render() {
    const { name, id, age, gender, isAdopted, type, weight } = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <h4 className="header">{name}</h4>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
            <p>Gender: {gender}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={`ui button ${isAdopted ? '' : 'disabled'}`}>Already adopted</button>
          <button
            className={`ui button primary ${isAdopted ? 'disabled' : ''}`}
            onClick={() => this.props.onAdoptPet(id)}
          >
            Adopt pet
          </button>
        </div>
      </div>
    );
  }
}

export default Pet;
