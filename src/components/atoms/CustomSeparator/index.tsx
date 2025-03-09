import { Box, Flex, Text } from '@chakra-ui/react';

interface CustomSeparatorProps {
  text?: string;
  withText?: boolean;
}

const CustomSeparator: React.FC<CustomSeparatorProps> = ({ text, withText = false }) => {
  return (
    <Flex align="center">
      <Box flex="1" borderBottom="1px solid" borderColor="gray-200" />

      {withText && (
        <Text px="md" fontSize="sm" fontWeight="regular" color="dustyBlue">
          {text}
        </Text>
      )}

      <Box flex="1" borderBottom="1px solid" borderColor="gray-200" />
    </Flex>
  );
};

export default CustomSeparator;
