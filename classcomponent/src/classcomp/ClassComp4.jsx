import React, { Component } from 'react'

export default class ClassComp4 extends Component {

state = {
    count : 0
}
  render() {
    return (
      <div>
        <h1>Class Comp 4</h1>
        <button onClick={()=>{this.setState({count : this.state.count + 1})}} >Count number : {this.state.count}</button>
      </div>

    )
  }
}
