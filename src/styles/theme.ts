/** 
 * Fazer sempre as informações de dentro do chakra-ui/react. 
 * Pode existir o pacote dentro do chakra-ui/core mas não se deve importar de dentro desse pacote.
 * https://chakra-ui.com/ 
 * https://emotion.sh/docs/introduction
*/

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2"    
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})
