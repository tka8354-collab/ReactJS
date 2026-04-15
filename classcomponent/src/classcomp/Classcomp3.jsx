import React, { Component } from 'react'

class Classcomp3 extends Component {

  state = {
    name : "Ritik"
  }
  
  changename = () =>{
    this.setState({name : this.state.name = "pratik"})
  }

  name1 = "Roshani"
  
  render() {

    return (
      <div>
        <h1>class Comp 3</h1>
        <h2>Good Morining {this.state.name}</h2>
        <button onClick={this.changename}>
           {this.state.name}
        </button>

        <h3>{this.name1}</h3>
        <h4>{this.name1 = "Rohan"}</h4>

            <h4>{this.state.name = "Deepak"}</h4>
      </div>
    )
  }
}
export default  Classcomp3 ;