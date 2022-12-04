import { NativeBaseProvider, StatusBar } from 'native-base';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider  theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </NativeBaseProvider>
  );
}