import React from 'react';
import { SayAge } from './SayAge';


export class Welcome extends React.Component {
  render() {
    let ageVerify = this.props.age;
    let nameWelcome = this.props.name;
    if (ageVerify >= 18 && ageVerify < 65 && nameWelcome === 'John') {
      return (
        <div>
          <p>Welcome, {nameWelcome}!</p>
          <SayAge age={ageVerify} />
        </div>
      )
    } else {
      return (
        <div>
          <p>Welcome, {this.props.name}!</p>
        </div>
      )
    }
  }
}




