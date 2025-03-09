import { Box, Text, Flex } from '@chakra-ui/react';

import { CustomSeparator } from '@/components/atoms';

const OrderInfoCard = () => {
  return (
    <Box
      maxWidth="420px"
      width="full"
      backgroundColor="gray-100"
      borderColor="black"
      borderRadius="md"
      border={{ base: 'none', md: '1px solid' }}
      paddingX={{ base: 'md', md: 'xl' }}
      paddingTop={{ base: '12px', md: 'xl' }}
      paddingBottom={{ base: 'md', md: 'xxl' }}
    >
      <Text fontSize="lg" fontWeight="semibold" color="textSecondary" marginBottom="lg">
        Order info &lt;= 100 char.
      </Text>

      <Flex flexDirection="column" gap="md">
        <Text fontSize="sm" fontWeight="medium" color="textSecondary">
          Description &lt;= 400 char.
        </Text>

        <CustomSeparator />

        <Box>
          <Text fontSize="sm" fontWeight="medium" color="textSecondary" lineHeight="sm">
            Lamel Professional Smart Skin Compact Powder
          </Text>
          <Text fontSize="xs" color="gray-300" lineHeight="xs">
            Пудра для лица
          </Text>
        </Box>

        <CustomSeparator />

        <Box textAlign="right">
          <Text fontSize="md" fontWeight="semibold" lineHeight="md">
            5 days free
          </Text>
          <Text fontSize="sm" color="textSecondary" fontWeight="regular">
            then 299.99 UAH per 14 days
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrderInfoCard;
