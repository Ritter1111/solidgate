import { Button, Input, Stack, HStack } from '@chakra-ui/react';
import { usePaymentInputs } from 'react-payment-inputs';

import { Field } from '@/components/UI/Field';

const PaymentForm: React.FC = () => {
  const { getExpiryDateProps, getCVCProps, getCardNumberProps } = usePaymentInputs();

  return (
    <Stack as="form" gap="md">
      <Field label="Card Number">
        <Input
          {...getCardNumberProps()}
          _focus={{ borderColor: 'blue', borderWidth: '2px', outline: 'none' }}
          borderColor="inputBorderColor"
          placeholder="1234 1234 1234 1234"
        />
      </Field>

      <HStack>
        <Field label="Expiration Date">
          <Input
            {...getExpiryDateProps()}
            _focus={{ borderColor: 'blue', borderWidth: '2px', outline: 'none' }}
            borderColor="inputBorderColor"
          />
        </Field>

        <Field label="CVC">
          <Input
            {...getCVCProps()}
            _focus={{ borderColor: 'blue', borderWidth: '2px', outline: 'none' }}
            borderColor="inputBorderColor"
            placeholder="•••"
          />
        </Field>
      </HStack>

      <Button background="green-100" borderRadius="sm" size="md" _hover={{ background: 'green-50', offset: '2px' }}>
        Pay 299.99 UAH
      </Button>
    </Stack>
  );
};

export default PaymentForm;
