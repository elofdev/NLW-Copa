import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold }from '@expo-google-fonts/roboto'

import { Loading }from './src/components/Loading'
import { SignIn } from './src/screens/SignIn';

import { THEME } from './src/styles/theme'

export default function App() {
  /*carrega de forma assincrona, a fonte no dispositvo caso ele não a tenha 
  ou não esteja disponivel na hora que a app roda.
  GARANTIR QUE A FONTE FOI CARREGADA*/

   const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
  });


  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />

      {/* CHAVES ABAIXO: Verifica se o fonts está carregando ou já está carregada, 
      através de um if ternário */}
      { fontsLoaded ? <SignIn /> : <Loading /> }
    </NativeBaseProvider>
  );
}
