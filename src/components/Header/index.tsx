import { Flex, Text, Box } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      height="56px"
      right={0}
      position={{ base: 'absolute', md: 'relative' }}
      width={{ base: 'full', md: 'auto' }}
    >
      <Flex align="center" justify="flex-end" top={0} right={0}>
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
