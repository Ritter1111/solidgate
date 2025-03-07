import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" width="full" height="56px" display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="sm" color="textFooter" fontWeight="medium" lineHeight="md">
        Powered by <strong>Solid</strong>
      </Text>
    </Box>
  );
};

export default Footer;
