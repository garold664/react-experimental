import { useState } from 'react';
import List from './List';
import BlockWithScroll from '../../components/BlockWithScroll';

export default function UseDefferedValue() {
  const [input, setInput] = useState('');
  return (
    <>
      <h1>UseDefferedValue</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="input"
      />
      <BlockWithScroll>
        <List input={input} />
      </BlockWithScroll>
    </>
  );
}
