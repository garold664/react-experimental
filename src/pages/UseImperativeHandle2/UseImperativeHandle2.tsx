import { useRef, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

type RefMethods = {
  focusCloseBtn: () => void;
  focusDenyBtn: () => void;
  focusConfirmBtn: () => void;
};

export default function UseImperativeHandle2() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<RefMethods>(null);
  return (
    <>
      <h1>UseImperativeHandle 2nd example</h1>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current?.focusCloseBtn()}>
        Focus Close
      </button>
      <button onClick={() => modalRef.current?.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current?.focusDenyBtn()}>
        Focus Deny
      </button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
