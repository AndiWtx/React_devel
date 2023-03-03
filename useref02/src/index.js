import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarDetails } from './CarDetails';

class Apps extends React.Component {
  initialData = {
    model: '',
    year: '',
    color: '#000000'
  }
  render() {
    return <CarDetails initialData={this.initialData} />
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);


