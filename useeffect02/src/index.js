import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HandleButtonClick } from './HandleButtonClick'


export function Apps() {

  const [showCounter, setShowCounter] = useState(true)

  function handleToggleCounter() {
    setShowCounter((s) => !s)
  }

  return (
    <div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
      {showCounter && <HandleButtonClick />}
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);


