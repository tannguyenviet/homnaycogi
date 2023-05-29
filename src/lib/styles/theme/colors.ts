import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  primary: {
    '100': '#ffffff',
    '200': '#3742FA',
  },
  secondary: {
    '100': '#f3f3f7',
  },
  text: {
    '100': '#061157',
    '200': '#6A719A',
  },
  borderColor: {
    '100': '#F3F3F7',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
