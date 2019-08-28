import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super()
    this.state ={
      isAdopted: props.isAdopted
    }
  }

  adoptThePet = (event) => {
    console.log(this)
    console.log(this.state)
    console.log(event.target)
    this.setState({isAdopted: true})
    console.log(this.state)
  }

  hooray = (event) => {
    console.log("you can't adopt this pet twice")
    alert("Hooray!")
  }

  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
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
          {this.state.isAdopted == true ? <button className="ui disabled button" onClick={this.hooray}>
            Already adopted</button> : <button className="ui primary button" onClick={this.adoptThePet} >Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
