import { useState, useRef } from 'react';
import Todo from './Todo';

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        onClick={() => setShowTodo(!showTodo)}
        className="btn btn-primary"
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
