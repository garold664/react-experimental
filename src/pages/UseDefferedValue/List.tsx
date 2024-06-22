import React, { useMemo } from 'react';

const LIST_SIZE = 1 * 10 ** 4;
export default function List({ input }: { input: string }) {
  const list = useMemo(() => {
    const l: JSX.Element[] = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }
    return l;
  }, [input]);
  return list;
}
