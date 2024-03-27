import { useState, useEffect, useRef } from 'react';

/*
whenever we render any state in the component the component gets re-rendered.

so now every time i type something the event changes so  the 'Renders' increases by 1.

in instances that i want the previous state - we can create a new reference
---
Using useState in React makes components re-render every time the state changes. For example, each time you type in a textbox, the component updates and re-renders.

But, if we want to keep track of how many times our component has re-rendered or what the previous state was without causing extra re-renders, we use useRef.

useRef lets us store a value that doesn’t cause re-renders when it changes.
It’s great for tracking non-reactive info like previous state values or count of renders.
In short, useRef is for keeping track of data across renders without affecting the rendering process itself.
*/

const UseRefExample2 = () => {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
};

export default UseRefExample2;
