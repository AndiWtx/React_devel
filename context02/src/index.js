import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageContext } from './LanguageContext';
import { HelloWorld } from './HelloWorld';

export class LanguageChanger extends React.Component {
  state = {
    language: 'en'
  }

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">EN</option>
          <option value="ro">RO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <HelloWorld />
          <h1>The selected language is: {this.state.language}</h1>
        </LanguageContext.Provider>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LanguageChanger />);
