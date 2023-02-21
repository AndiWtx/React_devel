import React from 'react'

export class Form extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    disableLogin: true,
  };

  handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputType = event.target.type;
    const inputValue =
      inputType === "checkbox" ? event.target.checked : event.target.value;

    this.setState({ [inputName]: inputValue });
    this.isButtonDisabled();
  };

  isButtonDisabled = () => {
    this.setState((state) => {
      return {
        disableLogin: state.username && state.password ? false : true,
      };
    });
  };






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
          name='remember'
          value={this.state.checkbox}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          disabled={this.state.disableLogin}
          onClick={this.props.onLogin}
        >
          Login
        </button>
      </div>
    )
  }
}