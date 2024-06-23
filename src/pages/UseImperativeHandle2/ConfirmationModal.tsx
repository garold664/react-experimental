import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

type ModalProps = { isOpen: boolean; onClose: () => void };

export default forwardRef<HTMLDivElement, ModalProps>(
  function ConfirmationModal({ isOpen, onClose }: ModalProps, ref) {
    if (!isOpen) {
      return null;
    }
    return (
      <div className="modal" ref={ref}>
        <button>&times;</button>
        <header className="modal-header">
          <h2>Title</h2>
        </header>
        <div className="modal-body">Do you confirm?</div>
        <footer className="modal-footer">
          <button onClick={onClose}>Yes</button>
          <button onClick={onClose}>No</button>
        </footer>
      </div>
    );
  }
);
