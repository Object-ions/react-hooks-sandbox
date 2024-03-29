// Use this useMemo hook or useCallback hook only when experiencing performance issues
// this hook used for memoisation and computed values

// memoisation is a optimization technique that speeds up performance by storing or cashing the result of an expensive function call (fx that takes a lot of resources, takes a while to execute and complete) when the same input occur (when they has the same arguments). - that when use memo can help up with performance.

import { useState, useEffect, useRef, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  // Creating a computer fx in the purpose of demonstrating
  const sqrt = getSqrt(number);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={onClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log('expensive fx called');
  return Math.sqrt(n);
}

export default UseMemoExample;
