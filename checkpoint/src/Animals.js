import React, { useState } from 'react'


export function Animals() {
  const [animals, setAnimals] = useState({

    id: '1',
    type: null,
    journeysNo: 0,
    isHere: false,
  })


  function onSubmit(event) {
    event.preventDefault();
    const hh = event.target[0].value

    setAnimals({
      ...animals,
      type: hh
    })



  }

  function onToggle(event) {
    event.preventDefault();
    setAnimals({
      ...animals, journeysNo: animals.journeysNo + 1,
      isHere: !animals.isHere

    })
  }


  return (
    <div>
      <h2>The animal is {animals.type},{animals.journeysNo},{animals.isHere ? 'is here' : 'is not here'}</h2>
      <form onSubmit={onSubmit}>
        <input
          name="add"
        >
        </input>
        <button
          type="submit">
          Save
        </button>
      </form>
      <button onClick={onToggle}>
        {animals.isHere ? 'go to journey' : 'return from journey'}
      </button>
    </div >
  )
}