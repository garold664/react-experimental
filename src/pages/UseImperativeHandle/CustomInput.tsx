import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { RefMethods } from './UseImperativeHandle';

export default forwardRef<RefMethods, ComponentPropsWithoutRef<'input'>>(
  function CustomInput({ ...props }: ComponentPropsWithoutRef<'input'>, ref) {
    useImperativeHandle(
      ref,
      () => {
        return { alertHi: () => alert('hi') };
      },
      []
    );
    return <input {...props} />;
  }
);
