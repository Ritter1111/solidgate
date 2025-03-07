import { Button, Input, Stack, HStack, Box } from '@chakra-ui/react';
import { usePaymentInputs } from 'react-payment-inputs';

import { Field } from '@/components/UI/Field';
import { useState } from 'react';

const PaymentForm: React.FC = () => {
  const { getExpiryDateProps, getCVCProps, getCardNumberProps } = usePaymentInputs();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    if (isProcessing) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

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

      <Button
        background="green-100"
        borderRadius="sm"
        size="md"
        onClick={handleClick}
        disabled={isProcessing}
        _disabled={{
          opacity: 1,
          cursor: 'auto',
        }}
        _hover={{
          background: 'green-50',
          transform: 'translateY(-2px)',
          transition: 'transform 0.2s ease-in',
        }}
        _active={{
          transform: 'translateY(2px) !important',
          filter: 'brightness(0.9)',
          transition: 'transform 0.2s ease-in',
        }}
      >
        <Box as="span" position="absolute" animation={isProcessing ? 'fadeOut' + ' 120ms ease-out forwards' : 'none'}>
          Pay 299.99 UAH
        </Box>

        {isProcessing && (
          <Box as="span" position="absolute" animation={'fadeIn' + ' 120ms ease-out forwards'}>
            Processing payment...
          </Box>
        )}
      </Button>
    </Stack>
  );
};

export default PaymentForm;
