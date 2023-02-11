import React from 'react';


export class SayAge extends React.Component {
  render() {
    if (this.props.age >= 18) {
      return (
        <p>Your age is {this.props.age}!</p>
      )
    } else {
      return <p>You are too young!</p>
    }
  }
}

