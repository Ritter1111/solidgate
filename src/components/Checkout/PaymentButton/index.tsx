import { Button, Box } from '@chakra-ui/react';

interface SubmitPaymentButtonProps {
  inPending: boolean;
}

const SubmitPaymentButton: React.FC<SubmitPaymentButtonProps> = ({ inPending }) => {
  return (
    <Button
      type="submit"
      background="green-100"
      borderRadius="sm"
      size="md"
      disabled={inPending}
      _disabled={{
        opacity: 1,
        cursor: 'auto',
      }}
      _hover={{
        background: 'green-50',
        transform: inPending ? 'none' : 'translateY(-2px)',
        transition: 'transform 0.2s ease-in',
      }}
      _active={{
        transform: inPending ? 'none' : 'translateY(2px) !important',
        filter: 'brightness(0.9)',
        transition: 'transform 0.2s ease-in',
      }}
    >
      <Box as="span" position="absolute" animation={inPending ? 'fadeOut 120ms ease-out forwards' : 'none'}>
        Pay 299.99 UAH
      </Box>

      {inPending && (
        <Box as="span" position="absolute" animation={'fadeIn 120ms ease-out forwards'}>
          Processing payment...
        </Box>
      )}
    </Button>
  );
};

export default SubmitPaymentButton;
