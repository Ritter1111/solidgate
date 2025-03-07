import { Flex } from '@chakra-ui/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckoutPage: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <Flex as="main" flexGrow={1} align="start" justify="center" gap={8}></Flex>

      <Footer />
    </Flex>
  );
};

export default CheckoutPage;
