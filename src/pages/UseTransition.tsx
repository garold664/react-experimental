import React, { useState, useTransition } from 'react';

const LIST_SIZE = 1 * 10 ** 4;

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   //# here we are setting 2 states at the same time
  //   // by default states are updated in batch.
  //   // because of that input state gots delayed
  //   setInput(e.target.value);
  //   const l: string[] = [];
  //   for (let i = 0; i < LIST_SIZE; i++) {
  //     l.push(e.target.value);
  //   }
  //   setList(l);
  // }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    startTransition(() => {
      //# this code has lower priority
      const l: string[] = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <>
      <h1>UseTransition</h1>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item: string, index: number) => <div key={index}>{item}</div>)
      )}
    </>
  );
}
