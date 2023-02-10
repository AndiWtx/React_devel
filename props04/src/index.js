import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './Welcome';


class App extends React.Component {
  render() {
    return <Welcome name=<strong>John</strong> age={43} />
  }
}
const nameApp = <App />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nameApp);


// the value that we pass will display as it is: a paragraph, a header, or only strong. 
// for a paragraph, or another tag that implies different sintax, nor just different style, it will change the pagination

