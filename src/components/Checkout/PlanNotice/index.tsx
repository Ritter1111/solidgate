import { Box, Text } from '@chakra-ui/react';

const PlanNotice = () => {
  return (
    <Box
      width="full"
      borderRadius="md"
      px="md"
      py="sm"
      border="1px solid"
      borderColor="borderColor"
      color="textFooter"
      fontSize="xs"
      marginTop="sm"
    >
      You'll have your <Text as="strong">Plan Pro during 1 year</Text>. After this period of time, your plan will be{' '}
      <Text as="strong">automatically renewed</Text> with its original price without any discounts applied.
    </Box>
  );
};

export default PlanNotice;
