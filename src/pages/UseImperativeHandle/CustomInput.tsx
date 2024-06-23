import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

export default forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  function CustomInput({ ...props }: ComponentPropsWithoutRef<'input'>, ref) {
    return <input ref={ref} {...props} />;
  }
);
