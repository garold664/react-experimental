import React from 'react';

export default function BlockWithScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ overflow: 'auto', maxHeight: '150px' }}>{children}</div>;
}
