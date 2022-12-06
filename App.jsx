import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_700Bold } from '@expo-google-fonts/nunito'

import { Login } from './src/screens/Login';

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';

import { AuthContextProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  const [fontsloader] = useFonts({ Nunito_400Regular, Nunito_500Medium, Nunito_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsloader ? <Routes /> : <Loading />}

      </AuthContextProvider>
    </NativeBaseProvider>
  );
}