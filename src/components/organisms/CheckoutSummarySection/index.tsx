import { Box, Text, Flex, Image } from '@chakra-ui/react';

import { CustomSeparator } from '@/components/atoms';
import { PaymentForm } from '@/components/organisms';
import { PaymentMethodButton } from '@/components/molecules';
import arrowLeft from '@/assets/arrowLeft.svg';

const CheckoutSummarySection = () => {
  return (
    <Flex flexDirection="column" gap="lg" maxWidth="420px" width="full">
      <Flex flexDirection="column" alignItems={{ base: 'center', md: 'start' }}>
        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="textSecondary"
            lineHeight="xl"
            _hover={{ cursor: 'pointer' }}
          >
            Checkout
          </Text>

          <Image position="absolute" top={{ base: '6', md: '3' }} left={{ base: '6', md: '-6' }} src={arrowLeft} />
        </Box>

        <Text fontSize={{ base: 'xxl', md: '3xl' }} fontWeight="semibold" color="textSecondary" lineHeight="xl">
          5 days free
        </Text>

        <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="textSecondary" lineHeight="md">
          then 299.99 UAH per 14 days
        </Text>
      </Flex>

      <PaymentMethodButton />

      <Box>
        <CustomSeparator text="or pay with card" withText />

        <PaymentForm />

        <Box
          paddingX="md"
          paddingY="sm"
          border="1px solid"
          borderColor="darkBorderColor"
          borderRadius="md"
          color="dustyBlue"
          fontSize="xs"
          marginTop="sm"
        >
          You'll have your <Text as="strong">Plan Pro during 1 year</Text>. After this period of time, your plan will be{' '}
          <Text as="strong">automatically renewed</Text> with its original price without any discounts applied.
        </Box>
      </Box>
    </Flex>
  );
};

export default CheckoutSummarySection;
