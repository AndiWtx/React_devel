import React from 'react';
import ReactDOM from 'react-dom/client';
import FilteredList from "./FilteredList";

class ListOfNames extends React.Component {
  state = {
    dataList: [
      {
        id: 1,
        name: "Alvaro",
        age: 16,
      },
      {
        id: 2,
        name: "Sean",
        age: 32,
      },
      {
        id: 3,
        name: "Mozart",
        age: 60,
      },
    ],
  };

  render() {
    return <FilteredList dataList={this.state.dataList} />;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListOfNames />);

