import React from 'react'

export class TodoList extends React.Component {
  state = {
    item: "",
    items: ["Things To Do"],
  };

  handleItemsAddition = (e) =>
    this.setState({ item: "", items: [...this.state.items, this.state.item] });

  render() {
    return (
      <div>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={(e) => this.setState({ item: e.target.value })}
        />
        <button onClick={this.handleItemsAddition}>Add Item</button>
        <button onClick={() => this.setState({ items: [] })}>Reset</button>

        <ul>
          {this.state.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}