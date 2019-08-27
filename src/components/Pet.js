import React from 'react';

class Pet extends React.Component {
  render() {
    const { name, id, age, gender, isAdopted, type, weight } = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <h4 className="header">
            {gender === 'male' ? '♂' : '♀'}
            {name}
          </h4>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (
            <button className="ui button disabled">Already adopted</button>
          ) : (
            <button className="ui button primary" onClick={() => this.props.onAdoptPet(id)}>
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
