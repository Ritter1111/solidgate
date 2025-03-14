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

    keyframes: {
      fadeOut: {
        from: { opacity: '1', transform: 'translateY(0px) ' },
        to: { opacity: 0, transform: 'translateY(-16px) ' },
      },
      fadeIn: {
        from: { opacity: 0, transform: 'translateY(16px) ' },
        to: { opacity: 1, transform: 'translateY(0px) ' },
      },
    },

    tokens: {
      colors: {
        'green-50': { value: 'hsl(144, 97%, 31%)' }, // hover
        'green-100': { value: 'hsl(144, 97%, 27%)' }, // active
        'green-200': { value: 'hsl(144, 97%, 23%)' }, // default

        'gray-100': { value: '#F7F7F9' },
        'gray-200': { value: '#E0E2EA' },
        'gray-250': { value: '#C7C9D1' },
        'gray-300': { value: '#797E8B' },

        yellow: { value: '#F6C557' },

        textPrimary: { value: '#B0B4BE' },
        textSecondary: { value: '#363A43' },

        darkBorderColor: { value: '#E4E6EC' },

        blue: { value: '#89CFF0' },
        dustyBlue: { value: '#666C7B' },
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
