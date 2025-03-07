import { Button, Input, Stack, HStack } from '@chakra-ui/react';
import { usePaymentInputs } from 'react-payment-inputs';
import { Field } from '@/components/ui/field';

const PaymentForm: React.FC = () => {
  const { getExpiryDateProps, getCVCProps, getCardNumberProps } = usePaymentInputs();

  return (
    <>
      <Stack as="form">
        <Field label="Email" required>
          <Input backgroundColor={'green-100'} {...getCardNumberProps()} placeholder="1234 1234 1234 1234" />
        </Field>

        <HStack>
          <Field label="Email" required>
            <Input {...getExpiryDateProps()} />
          </Field>

          <Field label="Email" required>
            <Input {...getCVCProps()} placeholder="..." />
          </Field>
        </HStack>

        <Button colorScheme="green" size="lg">
          Pay 299.99 UAH
        </Button>
      </Stack>
    </>
  );
};

export default PaymentForm;
