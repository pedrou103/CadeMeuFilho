import {extendTheme} from 'native-base';

export const THEME = extendTheme({
    colors: {
        black: {
            900: '#121212',
            700: '#1C1C1E',
            600: '#2D2D2D',
            300: '#333334',
        },
        white: '#FFFFFF',
        green: {
            500: '#20A362'
        },
        blue: {
            500: '#3F8CF4'
        }
        
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
        30: 120,
        35: 140
    }
});