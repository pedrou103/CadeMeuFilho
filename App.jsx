import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_700Bold } from '@expo-google-fonts/nunito'

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Profile } from './src/screens/Profile';

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';

import { AuthContextProvider } from './src/contexts/AuthContext';

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

        {fontsloader ? <Login /> : <Loading />}

      </AuthContextProvider>
    </NativeBaseProvider>
  );
}