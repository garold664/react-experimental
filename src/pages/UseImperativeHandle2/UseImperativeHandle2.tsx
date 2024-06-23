import React, { useRef, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

export default function UseImperativeHandle2() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <h1>UseImperativeHandle 2nd example</h1>
      <button onClick={() => setOpen(true)}>Open</button>
      <button>Focus Close</button>
      <button>Focus Confirm</button>
      <button>Focus Deny</button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
