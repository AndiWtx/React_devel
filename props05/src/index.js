import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './Welcome';
import { SayAge } from './SayAge';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name='John' />
        <SayAge age={46} />
      </div>
    )
  }
}
const nameApp = <App />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nameApp);
