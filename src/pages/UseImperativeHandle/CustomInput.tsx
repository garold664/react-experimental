import React, { ComponentPropsWithRef } from 'react';

export default function CustomInput({
  ...props
}: ComponentPropsWithRef<'input'>) {
  return <input {...props} />;
}
