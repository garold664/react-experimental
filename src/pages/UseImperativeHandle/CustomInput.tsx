import {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

// export default forwardRef<RefMethods, ComponentPropsWithoutRef<'input'>>(
export default forwardRef(function CustomInput(
  { ...props }: ComponentPropsWithoutRef<'input'>,
  ref
) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert('hi') };
    },
    []
  );
  return <input {...props} />;
});
