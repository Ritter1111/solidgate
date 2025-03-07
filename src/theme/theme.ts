import { defineConfig, createSystem, defaultConfig } from '@chakra-ui/react';

export const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
    },
  },

  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      colors: {
        'green-100': { value: '#028837' },

        textPrimary: { value: '#B0B4BE' },
        textSecondary: { value: '#363A43' },
        textFooter: { value: '#666C7B' },

        background: { value: '#FFFFFF' },
      },

      fontWeights: {
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 },
      },

      fontSizes: {
        xs: { value: '12px' },
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '20px' },
        xl: { value: '24px' },
      },

      lineHeights: {
        sm: { value: '20px' },
        md: { value: '24px' },
        lg: { value: '32px' },
      },

      spacing: {
        xs: { value: '4px' },
        sm: { value: '8px' },
        md: { value: '16px' },
        lg: { value: '24px' },
        xl: { value: '32px' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
