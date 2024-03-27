import { useRef } from 'react';

/*
when we change the reference value we don't re-render the component like we do with set state value

When you change the value of a ref, it does not trigger a component re-render. The useRef hook is primarily used for accessing DOM elements directly, and it can also be used to store any mutable value that does not cause a re-render when updated. This is particularly useful for keeping track of values across renders without causing additional renders, unlike state updates with useState, which always cause a re-render.
*/

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = null;
    inputRef.current.style.border = '1px dashed red';
    inputRef.current.focus();

    paraRef.current.innerText = 'The form submitted successfully';
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        ref={inputRef}
        type="text"
        className="form-control mb-2"
        id="name"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      <p ref={paraRef}>Fill in the fields before submitting</p>
    </form>
  );
};

export default UseRefExample1;
