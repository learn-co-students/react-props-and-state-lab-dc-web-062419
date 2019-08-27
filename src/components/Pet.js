import React from 'react'
import { Agent } from 'http';

class Pet extends React.Component {

  state = {
    isAdopted: this.props.pet.isAdopted,
  }
  
  
  
  petGender = () => {
    if(this.props.pet.gender === 'male'){
     return '♂'
    }
    return '♀'
  }

  onAdoptPet = () => {
    
    this.props.onAdoptPet(this.props.pet.id)
  }

  
  adoptedOrNot = () => {
    
    if(this.props.pet.isAdopted === false){
      return(<button onClick={event => this.onAdoptPet(event)} className="ui primary button">Adopt pet</button>)
    }
    else{
      return (<button onClick={event => this.updateAdoption(event)} className="ui disabled button">Already adopted</button>)
    }
  }
  
  
  updateAdoption = (event) => {
   
    let newStatus = !this.state.isAdopted
    this.setState({
      isAdopted: newStatus
    })
    }
  
  render() {
    let {age, gender, id, isAdopted, name, type, weight} = this.props.pet
   
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.petGender()}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
            {this.adoptedOrNot()}
        </div>
      </div>
    )
  }
}

export default Pet
