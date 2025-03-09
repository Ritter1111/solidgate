import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, Flex, Stack, Image } from '@chakra-ui/react';

import { PaymentFormValues, paymentSchema } from '@/validation/paymentValidationSchema';
import { cardNumberMask, expiryDateMask, cvcMask } from '@/constants/paymentMasks';
import { SubmitPaymentButton } from '@/components/molecules';
import { MaskedInputController } from '@/components/organisms';
import InfoIcon from '@/assets/Info.svg';

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

  const successToast = () =>
    toast.success('Your payment was successful!', {
      duration: 4000,
    });

  const onSubmit = () => {
    if (inPending) {
      return;
    }

    setInPending(true);

    setTimeout(() => {
      setInPending(false);

      successToast();

      reset();
    }, 1500);
  };

  return (
    <Stack as="form" marginTop="md" onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="md" flexDirection="column">
        <MaskedInputController
          control={control}
          name="cardNumber"
          label="Card Number"
          placeholder="1234 1234 1234 1234"
          mask={cardNumberMask}
        />

        <HStack alignItems="flex-start">
          <MaskedInputController
            control={control}
            name="expiryDate"
            label="Expiration Date"
            placeholder="MM/YY"
            mask={expiryDateMask}
          />

          <MaskedInputController
            control={control}
            name="cvc"
            label="CVC"
            placeholder="•••"
            mask={cvcMask}
            endElement={<Image src={InfoIcon} cursor="pointer" />}
          />
        </HStack>

        <SubmitPaymentButton inPending={inPending} />
      </Flex>
    </Stack>
  );
};

export default PaymentForm;
