import { Input } from '@chakra-ui/react';
import MaskedInput from 'react-text-mask';

interface MaskedInputComponentProps {
  mask: (string | RegExp)[];
  value: string;
  placeholder?: string;
}

const MaskedInputComponent = ({ mask, value, placeholder }: MaskedInputComponentProps) => {
  return (
    <MaskedInput
      mask={mask}
      value={value}
      render={(ref, props) => (
        <Input
          {...props}
          ref={ref as React.Ref<HTMLInputElement>}
          borderColor="inputBorderColor"
          placeholder={placeholder}
          _focus={{ borderColor: 'blue', borderWidth: '2px', outline: 'none' }}
        />
      )}
    />
  );
};

export default MaskedInputComponent;
