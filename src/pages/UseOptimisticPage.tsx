import React, { useState, useOptimistic, startTransition } from 'react';

type Todo = {
  id: number;
  text: string;
};

const timerPromise = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export default function UseOptimisticPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'buy pc' },
    { id: 2, text: 'draw a picture' },
  ]);
  // const [text, setText] = useState('');

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentState: Todo[], optimisticTodoValue: Todo) => {
      return [...currentState, optimisticTodoValue];
    }
  );

  //# with startTransition
  // const onSubmit = () => {
  //   startTransition(async () => {
  //     addOptimisticTodo(text);
  //     await timerPromise(2000);
  //     setTodos((prevState) => {
  //       return [...prevState, text];
  //     });
  //   });
  // };

  //# with action
  const onSubmit = async (formData: FormData) => {
    const text = formData.get('text') as string;
    addOptimisticTodo({ id: Date.now(), text });
    await timerPromise(2000);
    setTodos((prevState) => {
      return [...prevState, { id: Date.now(), text }];
    });
  };
  return (
    <>
      <h1>UseOptimisticPage</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <form> */}
      <form action={onSubmit}>
        <input
          name="text"
          // value={text}
          // onChange={(e) => setText(e.target.value)}
          type="text"
        />
        {/* <button onClick={onSubmit}>add todo</button> */}
        <button>add todo</button>
      </form>
      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
