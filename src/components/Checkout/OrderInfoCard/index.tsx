import { Box, Text, Separator, Flex } from '@chakra-ui/react';

const OrderInfoCard = () => {
  return (
    <Box
      maxWidth="420px"
      width="full"
      borderColor="black"
      backgroundColor="cardBg"
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

        <Separator borderColor="separatorColor" height="1px" />

        <Box>
          <Text fontSize="sm" fontWeight="medium" color="textSecondary" lineHeight="sm">
            Lamel Professional Smart Skin Compact Powder
          </Text>

          <Text fontSize="xs" color="gray.50" lineHeight="xs">
            Пудра для лица
          </Text>
        </Box>

        <Separator borderColor="separatorColor" height="1px" />

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
