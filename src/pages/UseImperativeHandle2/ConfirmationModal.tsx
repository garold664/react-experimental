import { forwardRef, useImperativeHandle, useRef } from 'react';

type ModalProps = { isOpen: boolean; onClose: () => void };

// export default forwardRef<RefMethods, ModalProps>(function ConfirmationModal(
export default forwardRef(function ConfirmationModal(
  { isOpen, onClose }: ModalProps,
  ref
) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () => closeRef.current?.focus(),
        focusDenyBtn: () => denyRef.current?.focus(),
        focusConfirmBtn: () => confirmRef.current?.focus(),
      };
    },
    []
  );

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <button ref={closeRef}>&times;</button>
      <header className="modal-header">
        <h2>Title</h2>
      </header>
      <div className="modal-body">Do you confirm?</div>
      <footer className="modal-footer">
        <button ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button ref={denyRef} onClick={onClose}>
          No
        </button>
      </footer>
    </div>
  );
});
