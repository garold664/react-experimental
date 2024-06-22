import React, {
  useState,
  // experimental_useOptimistic as useOptimistic,
} from 'react';

import { useOptimistic } from 'react';
const timerPromise = (delay) => {
  return new Promise((res) => setTimeout(res, delay));
};

export default function UseOptimisticPage() {
  const [todos, setTodos] = useState(['buy pc', 'draw a picture']);
  const [text, setText] = useState('');

  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

  const onSubmit = async () => {
    await timerPromise(2000);
    setTodos((prevState) => {
      return [...prevState, text];
    });
  };
  return (
    <>
      <h1>UseOptimisticPage</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={onSubmit}>add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
