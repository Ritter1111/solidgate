import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';

import { Field, InputGroup } from '@/components/atoms';
import { Input } from '@chakra-ui/react';
import MaskedInput from 'react-text-mask';

interface MaskedInputControllerProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  placeholder?: string;
  mask: (string | RegExp)[];
  endElement?: React.ReactNode;
}

const MaskedInputController = <T extends FieldValues>({
  label,
  name,
  control,
  placeholder,
  mask,
  endElement,
}: MaskedInputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field {...field} label={label} errorText={fieldState.error?.message} invalid={!!fieldState.error}>
          <InputGroup endElement={endElement} width="full">
            <MaskedInput
              mask={mask}
              value={field.value}
              render={(ref, props) => (
                <Input
                  {...props}
                  placeholder={placeholder}
                  ref={ref as React.Ref<HTMLInputElement>}
                  _focus={{ borderColor: 'blue', borderWidth: '2px', outline: 'none' }}
                  css={{ '--error-color': 'red' }}
                />
              )}
            />
          </InputGroup>
        </Field>
      )}
    />
  );
};

export default MaskedInputController;
