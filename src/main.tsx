import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import App from './App.tsx';
import { system } from './theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
      <Toaster />
    </ChakraProvider>
  </StrictMode>
);
