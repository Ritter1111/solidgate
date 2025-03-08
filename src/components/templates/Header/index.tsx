import { Flex, Box, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      height="56px"
      right={0}
      top={{ base: '3', md: '0' }}
      position={{ base: 'absolute', md: 'relative' }}
      width={{ base: 'full', md: 'auto' }}
    >
      <Flex align="center" justify="flex-end" top={0} right={0}>
        <Button
          variant="ghost"
          fontSize="sm"
          padding="sm"
          fontWeight="medium"
          disabled
          _disabled={{ color: 'gray.500', cursor: 'default' }}
          _hover={{ bg: 'gray.100' }}
        >
          Eng
        </Button>

        <Button
          variant="ghost"
          fontSize="sm"
          padding="sm"
          fontWeight="medium"
          color="textSecondary"
          disabled={false}
          _disabled={{ color: 'gray.500', cursor: 'default' }}
          _hover={{ bg: 'gray.100' }}
        >
          Укр
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
