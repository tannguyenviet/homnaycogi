import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  breakpoints,
  styles: {
    global: {
      body: {
        bg: 'secondary.100',
        color: 'text.100',
      },
      a: {
        TextDecoder: 'none',
      },
    },
  },
});

export default customTheme;
