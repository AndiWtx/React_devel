import React from 'react';

export class ClickTracker extends React.Component {
  state = {
    lastButton: ''
  }

  handleTracker = (event) => {
    this.setState((state) => {
      return {

        lastButton: event.target.name
      }
    })

  }





  render() {
    return (
      <div>
        <button name="1" onClick={this.handleTracker.bind(this)}>
          Increment1
        </button><br></br>
        <button name="2" onClick={this.handleTracker.bind(this)}>
          Increment2
        </button><br></br>
        <button name="3" onClick={this.handleTracker.bind(this)}>
          Increment3
        </button>
        <h1>Button {this.state.lastButton}</h1>
      </div>
    )
  }

}
