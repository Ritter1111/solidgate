import { useState } from 'react';
import { Button, HStack, Box, Image } from '@chakra-ui/react';
import { paymentOptions } from './utils';

const PaymentMethodButton = () => {
  const [currentPaymentOption, setCurrentPaymentOption] = useState(0);

  const handlePaymentButtonClick = () => {
    setCurrentPaymentOption((prevIndex) => (prevIndex + 1) % paymentOptions.length);
  };

  const currentOption = paymentOptions[currentPaymentOption];

  return (
    <Box onClick={handlePaymentButtonClick} cursor="pointer">
      {currentOption.dual ? (
        <HStack>
          <Button w="full" flex="1" background={currentOption.left.background} borderRadius="xs">
            <Image src={currentOption.left.logo} />
          </Button>

          <Button w="full" flex="1" background={currentOption.right.background} borderRadius="xs">
            <Image src={currentOption.right.logo} />
          </Button>
        </HStack>
      ) : (
        <Button w="full" background={currentOption.background} borderRadius="xs">
          <Image src={currentOption.logo} />
        </Button>
      )}
    </Box>
  );
};

export default PaymentMethodButton;
