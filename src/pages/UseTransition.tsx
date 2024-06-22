import React, { useState } from 'react';

const LIST_SIZE = 3 * 10 ** 4;

export default function UseTransition() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<number[]>([]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //# here we are setting 2 states at the same time
    // by default states are updated in batch.
    // because of that input state gots delayed
    setInput(e.target.value);
    const l: number[] = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(+e.target.value);
    }
    setList(l);
  }
  return (
    <>
      <h1>UseTransition</h1>
      <input type="text" value={input} onChange={handleChange} />
      {list.map((item: number, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}
