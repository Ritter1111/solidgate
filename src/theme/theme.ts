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
      md: '1000px',
    },
    tokens: {
      colors: {
        'green-50': { value: '#029C3F' },
        'green-100': { value: '#028837' },

        'gray-50': { value: '#797E8B' },

        textPrimary: { value: '#B0B4BE' },
        textSecondary: { value: '#363A43' },
        textFooter: { value: '#666C7B' },

        background: { value: '#FFFFFF' },

        borderColor: { value: '#E4E6EC' },

        inputBorderColor: { value: '#C7C9D1' },

        separatorColor: { value: '#E0E2EA' },

        cardBg: { value: '#F7F7F9' },

        blue: { value: '#89CFF0' },
      },

      fontWeights: {
        regular: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 },
      },

      fontSizes: {
        xs: { value: '12px' },
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '18px' },
        xl: { value: '20px' },
        xxl: { value: '24px' },
        '3xl': { value: '32px' },
      },

      lineHeights: {
        xs: { value: '16px' },
        sm: { value: '20px' },
        md: { value: '24px' },
        lg: { value: '32px' },
        xl: { value: '40px' },
      },

      spacing: {
        xs: { value: '4px' },
        sm: { value: '8px' },
        md: { value: '16px' },
        lg: { value: '24px' },
        xl: { value: '32px' },
        xxl: { value: '40px' },
      },

      radii: {
        xs: { value: '3px' },
        sm: { value: '6px' },
        md: { value: '8px' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
