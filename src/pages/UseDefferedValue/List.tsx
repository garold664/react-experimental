import React, { useDeferredValue, useMemo } from 'react';

const LIST_SIZE = 2 * 10 ** 4;
export default function List({ input }: { input: string }) {
  const defferedInput = useDeferredValue(input);
  //# useDeferredValue immediately returns previous value and then waits until changes stop happening and only then returns new value
  //# in other words useDefferedvalue makes this value of low priority

  //# the value can come from anywhere (state, some library, api, ...)
  console.log('input: ', input);
  console.log('defferedInput: ', defferedInput);
  const list = useMemo(() => {
    const l: JSX.Element[] = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defferedInput}</div>);
    }
    return l;
  }, [defferedInput]);
  return list;
}
