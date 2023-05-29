import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = {
  borderColor: '#979797',
  paddingInline: 4,
  margin: 'auto',
  alignItems: 'center',
};

const sizes = {
  sm: defineStyle({
    maxW: '45ch',
    p: '4',
  }),
  md: defineStyle({
    maxW: 'container.sm',
    p: '6',
    fontSize: 'lg',
  }),
  mobile: defineStyle({
    maxW: '896px',
  }),
  pc: defineStyle({
    maxW: '1024px',
  }),
};
// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle, sizes });
