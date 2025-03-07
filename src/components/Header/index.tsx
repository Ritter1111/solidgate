import { Flex, Text, Box } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" width="full" height="56px" position={{ base: 'absolute', md: 'relative' }}>
      <Flex align="center" justify="flex-end" height="full">
        <Text
          display={{ base: 'none', md: 'block' }}
          color="textPrimary"
          padding="sm"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="md"
        >
          Eng
        </Text>

        <Text color="textSecondary" padding="sm" fontSize="sm" fontWeight="medium" lineHeight="md">
          Укр
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
