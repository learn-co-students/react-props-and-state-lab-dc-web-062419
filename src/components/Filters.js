import React from "react";

class Filters extends React.Component {
  
  constructor() {
    super();

    this.state = {
     type: "all"
    };
  }


  findPets = (event) =>{
    this.props.onFindPetsClick(event)
    
  }
  

  onChangeType = (event) => {
      
      this.setState({type: event.target.value}, () => this.props.onChangeType(this.state) )
     
    }
    


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => this.onChangeType(event)} value={this.state.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={event => this.findPets(event)} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
