import React from 'react';
import { SayAge } from './SayAge';


export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <SayAge age={this.props.age} />
      </div>
    )
  }
}





