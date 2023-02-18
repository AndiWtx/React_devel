import React from 'react'

export class IntWelcome extends React.Component {
  state = {
    username: '',
    password: '',
    checkbox: ''
  }

  handleInputChange = (event) => {
    const value = event.target.value

    if (event.target.name === 'username') {
      this.setState({
        username: value
      }
      )
    } else if (event.target.name === 'password') {
      this.setState({
        password: value
      }
      )
    } else if (event.target.name === 'checkbox') {
      this.setState({
        checkbox: event.target.checked
      }
      )
    }
    console.log(this.state)
  }






  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          type='checkbox'
          name='checkbox'
          value={this.state.checkbox}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}