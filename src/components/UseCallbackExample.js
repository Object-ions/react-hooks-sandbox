/*
Only use this hook when you have expensive function calls
*/

import React, { useState, useCallback } from 'react';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered');

  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
