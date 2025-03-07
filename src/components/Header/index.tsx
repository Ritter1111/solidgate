import { Flex, Text, Box } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" width="full" height="56px">
      <Flex align="center" justify="flex-end" height="full">
        <Text color="textPrimary" padding="sm" fontSize="sm" fontWeight="medium" lineHeight="md">
          Eng
        </Text>

        <Text color="textSecondary" padding="sm" fontSize="sm" fontWeight="medium" lineHeight="md">
          <strong>Укр</strong>
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
