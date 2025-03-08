import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';

import { Field } from '@/components/UI/Field';
import MaskedInputComponent from '@/components/MaskedInputComponent';

interface PaymentFieldControllerProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  placeholder?: string;
  mask: (string | RegExp)[];
}

const PaymentFieldController = <T extends FieldValues>({
  label,
  name,
  control,
  placeholder,
  mask,
}: PaymentFieldControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field {...field} label={label} errorText={fieldState.error?.message}>
          <MaskedInputComponent mask={mask} value={field.value} placeholder={placeholder} />
        </Field>
      )}
    />
  );
};

export default PaymentFieldController;
