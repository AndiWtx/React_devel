import React from 'react';

export class HandleButtonClick extends React.Component {
  state = { count: 0 }

  handleCounterIncrement() {
    this.setState(state => {
      return {
        count: state.count + 1
      }
    })
  }


  render() {
    return (
      <>
        <button onClick={this.handleCounterIncrement.bind(this)}>
          Increment
        </button>
        <p>Count: {this.state.count}</p>
      </>
    )
  }

}

