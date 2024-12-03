import React, { Component } from 'react'

export default class EventHandelerClassComponent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ''
      }
    }
    
    
    handleChange = (e) => {
        this.setState({
            changeValue: e.target.value
        }) //2nd bracket er por 2nd parametar hisabe function call korle type er sathe sathe e kaj korbe, na hole 1 bar ghure asar por
        console.log(this.state.changeValue);
    }
  
    render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} ></input>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
