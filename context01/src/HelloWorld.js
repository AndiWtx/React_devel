import React from 'react';
import { LanguageContext } from './LanguageContext';

const Strings = {
  en: {
    current_hello: "Hello World"
  },
  ro: {
    current_hello: "Buna Lume"
  }
}

export class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <div>< h1 >{Strings[language].current_hello}</h1 ></div>
          }}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

