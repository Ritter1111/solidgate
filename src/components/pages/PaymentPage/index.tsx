import { Flex } from '@chakra-ui/react';

import { CheckoutSummarySection } from '@/components/organisms';
import { OrderInfoCard } from '@/components/molecules';
import { Header, Footer } from '@/components/templates';

const PaymentPage: React.FC = () => {
  return (
    <Flex direction="column" minHeight="100vh" maxWidth="872px" margin="0 auto">
      <Header />

      <Flex
        as="main"
        flexGrow={1}
        gap={8}
        position="relative"
        paddingX={{ base: 'md', md: '0' }}
        align={{ base: 'center', md: 'start' }}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'space-between', md: 'start' }}
      >
        <CheckoutSummarySection />

        <OrderInfoCard />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default PaymentPage;
