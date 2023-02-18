import React from 'react'
import { Welcome } from './Welcome'

export class IntWelcome extends React.Component {
  state = {
    username: ''
  }

  handleInputChange = (event) => {
    const value = event.target.value

    this.setState({
      username: value
    })
  }
  render() {
    return (
      <div>
        <h1>Input Tag</h1>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <Welcome name={this.state.username} />
      </div>
    )
  }
}