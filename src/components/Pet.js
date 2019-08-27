import React from 'react'

class Pet extends React.Component {

  // constructor(props) {
  //   super()
  //   this.props = {
  //     name: props.name,
  //     type: props.type,
  //     age: props.age,
  //     weight: props.weight,
  //     isAdopted: props.isAdopted,
  //     gender: props.gender
  //   }
  // }

  // adopted = () => {
  //   this.setprops({
  //     ...this.props,
  //     isAdopted: true
  //   })
  // }

  whichGender = () => {
    if (this.props.gender === "male") {
      return ('♂')
    }
   else if (this.props.gender === 'female') {
      return ('♀')
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.whichGender()}    
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() => {this.props.onAdoptPet(this.props.petObj)}}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
