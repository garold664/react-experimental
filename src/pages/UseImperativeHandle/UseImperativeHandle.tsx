import React, { useRef, useState } from 'react';
import CustomInput from './CustomInput';

export default function UseImperativeHandle() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>UseImperativeHandle</h1>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          // inputRef.current?.focus();
          inputRef.current.alertHi();
        }}
      >
        Focus
      </button>
    </>
  );
}
