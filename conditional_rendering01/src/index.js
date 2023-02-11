import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './Welcome';


class App extends React.Component {
  render() {
    return <Welcome name='John' />
  }
}
const nameApp = <App />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nameApp);
