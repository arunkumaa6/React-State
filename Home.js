import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            name:"react",
            age:2013
        }

    }
    changeValue=()=>{
        this.setState({age:2014,name:"js"})
    }
  render() {
    return (
      <div>Home
        <h2>{this.state.name}{this.state.age}</h2>
        <button onClick={this.changeValue}>click</button>
      </div>
    )
  }
}



