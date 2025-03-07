import { Flex } from '@chakra-ui/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderInfoCard from '@/components/Checkout/OrderInfoCard';
import CheckoutSummary from '@/components/Checkout/CheckoutSummary';
// import { ArrowLeft } from '@/assets/components/ArrowLeft';

const CheckoutPage: React.FC = () => {
  return (
    <Flex direction="column" minHeight="100vh" maxWidth="872px" margin="0 auto">
      <Header />

      <Flex
        as="main"
        flexGrow={1}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
        align={{ base: 'center', md: 'start' }}
        gap={8}
        position="relative"
        paddingX={{ base: 'md', md: '0' }}
      >
        {/* <IconButton position="absolute" top="0" left="-40px" variant="ghost" _hover={{ bg: 'transparent' }}>
          <ArrowLeft />
        </IconButton> */}

        <CheckoutSummary />

        <OrderInfoCard />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default CheckoutPage;
