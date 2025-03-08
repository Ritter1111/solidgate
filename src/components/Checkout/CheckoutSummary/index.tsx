import { Box, Text, Button, Flex } from '@chakra-ui/react';

import PaymentForm from '@/components/Checkout/PaymentForm';
import PlanNotice from '@/components/Checkout/PlanNotice';

const CheckoutSummary = () => {
  return (
    <Flex flexDirection="column" gap="lg" maxWidth="420px" width="full">
      <Flex flexDirection={'column'} alignItems={{ base: 'center', md: 'start' }}>
        <Text fontSize="lg" fontWeight="semibold" color="textSecondary" lineHeight="xl">
          Checkout
        </Text>

        <Text fontSize={{ base: 'xxl', md: '3xl' }} fontWeight="semibold" color="textSecondary" lineHeight="xl">
          5 days free
        </Text>

        <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="textSecondary" lineHeight="md">
          then 299.99 UAH per 14 days
        </Text>
      </Flex>

      <Button background="black" width="full" borderRadius="xs">
        Pay
      </Button>

      <Box>
        <Flex align="center" marginBottom="md">
          <Box flex="1" borderBottom="1px solid" borderColor="separatorColor" />

          <Text px="md" fontSize="sm" fontWeight="regular" color="textFooter">
            or pay with card
          </Text>

          <Box flex="1" borderBottom="1px solid" borderColor="separatorColor" />
        </Flex>

        <PaymentForm />

        <PlanNotice />
      </Box>
    </Flex>
  );
};

export default CheckoutSummary;
