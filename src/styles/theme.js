import {extendTheme} from 'native-base';

export const THEME = extendTheme({
    colors: {
        black: {
            900: '#121212',
            600: '#2D2D2D',
            300: '#333334',
        },
        white: '#FFFFFF'
    },
    fonts: {
        regular: 'Nunito_400Regular',
        medium: 'Nunito_500Medium',
        bold: 'Nunito_700Bold'
      },
    sizes: {
        14: 56,
        15: 60,
        22: 88,
        35: 140
    }
});