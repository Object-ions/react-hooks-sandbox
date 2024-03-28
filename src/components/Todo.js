import { useState, useEffect, useRef } from 'react';

/*
Handles react and firebase - "memory leak"

we need to make a reference pretening to the component being mounted.
---

The correction you've made between the "before" and "after" code snippets addresses a common issue in React components that perform asynchronous operations, such as fetching data from an API: memory leaks. Let's break down the problem and the solution:

- Before the Correction:

In the original code, there's a fetch request inside a useEffect hook that, after a successful response, updates the component's state after a delay (simulated by setTimeout).
If the component (Todo) gets unmounted before the fetch request completes and the setTimeout callback executes, you'd still attempt to update its state. Since the component no longer exists in the DOM, this leads to a memory leak and React throws a warning about trying to update the state on an unmounted component.

- After the Correction:

To prevent this issue, a ref (isMounted) is introduced and used to track whether the component is still mounted when the asynchronous operation completes.
When the component mounts, isMounted.current is true. If the component unmounts (e.g., the user navigates away from the page where the component is rendered), the cleanup function from useEffect sets isMounted.current to false.
Before updating the state with setTodo and setLoading, you check if (isMounted.current). This ensures state updates only occur if the component is still mounted, effectively preventing memory leaks.


*/

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            console.log(data);
            setLoading(false);
          }
        }, 3000);
      });

    // runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
}

export default Todo;
