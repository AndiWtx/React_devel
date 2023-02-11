import React from 'react';
import { SayAge } from './SayAge';


export class Welcome extends React.Component {
  render() {
    let ageVerify = this.props.age;
    if (ageVerify !== undefined) {
      return (
        <div>
          <p>Welcome, {this.props.name}!</p>
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




