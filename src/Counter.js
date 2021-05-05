import * as React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
  return <div className="p-4 bg-light">
    <h2 className="text-dark">{counter}</h2>
    <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
    <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
    <button onClick={rnd} className="btn btn-primary btn-lg">RND</button>
  </div>
}

export default Counter;