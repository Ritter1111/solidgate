import { Field as ChakraField } from '@chakra-ui/react';
import * as React from 'react';

export interface FieldProps extends Omit<ChakraField.RootProps, 'label'> {
  label?: React.ReactNode;
  errorText?: React.ReactNode;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
  const { label, children, errorText, ...rest } = props;

  return (
    <ChakraField.Root gap="xs" ref={ref} {...rest}>
      {label && (
        <ChakraField.Label color="dustyBlue" fontSize="xs" fontWeight="medium" lineHeight="xs">
          {label}
        </ChakraField.Label>
      )}

      {children}

      {errorText && (
        <ChakraField.ErrorText fontSize="xs" fontWeight="regular">
          {errorText}
        </ChakraField.ErrorText>
      )}
    </ChakraField.Root>
  );
});

export default Field;
