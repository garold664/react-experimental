import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

export default forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  function CustomInput({ ...props }: ComponentPropsWithoutRef<'input'>, ref) {
    useImperativeHandle(
      ref,
      () => {
        return { alertHi: () => alert('hi') };
      },
      []
    );
    return <input ref={ref} {...props} />;
  }
);
