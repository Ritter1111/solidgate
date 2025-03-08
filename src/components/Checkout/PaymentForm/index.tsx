import { HStack, Flex, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import PaymentFieldController from '@/components/Checkout/PaymentFieldController';
import { PaymentFormValues, paymentSchema } from '@/validation/paymentValidationSchema';
import { cardNumberMask, expiryDateMask, cvcMask } from '@/constants/paymentMasks';
import SubmitPaymentButton from '@/components/Checkout/PaymentButton';

const PaymentForm: React.FC = () => {
  const [inPending, setInPending] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm<PaymentFormValues>({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  });

  const onSubmit = () => {
    if (inPending) return;

    setInPending(true);

    setTimeout(() => {
      setInPending(false);

      reset();
    }, 1500);
  };

  return (
    <Stack as="form" gap="md" onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="md" flexDirection="column">
        <PaymentFieldController
          control={control}
          name="cardNumber"
          label="Card Number"
          placeholder="1234 1234 1234 1234"
          mask={cardNumberMask}
        />

        <HStack alignItems="flex-start">
          <PaymentFieldController
            control={control}
            name="expiryDate"
            label="Expiration Date"
            placeholder="MM/YY"
            mask={expiryDateMask}
          />

          <PaymentFieldController control={control} name="cvc" label="CVC" placeholder="•••" mask={cvcMask} />
        </HStack>

        <SubmitPaymentButton inPending={inPending} />
      </Flex>
    </Stack>
  );
};

export default PaymentForm;
