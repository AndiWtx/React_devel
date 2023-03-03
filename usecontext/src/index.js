import React from 'react';
import ReactDOM from 'react-dom/client';
import { DisplayLanguage } from './DisplayLanguage'
import { LanguageContext } from './LanguageContext';

class Apps extends React.Component {
  state = {
    language: "english",
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={(e) => this.setState({ language: e.target.value })}
        >
          <option value="english">English</option>
          <option value="romanian">Romanian</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);

