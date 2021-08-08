import React, { useState } from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './screens/Home';

// Use AppLoading component to trigger this function.
// So, it can set the fontsLoaded state after loading the fonts.
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  // It is needed to wait until the fonts are loaded.
  // Hence set a state to check whether fonts are loaded or not.
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  // Keep the track of whether fonts are loaded or not
  // before rendering the components.
  if (fontsLoaded)
  {
    return (
      <Home />
    );
  }
  else
  {
    return (
      // Use AppLoading component to call the function which loads the fonts.
      // When it is finished, set the state so application can render the components.
      <AppLoading 
        startAsync={getFonts}
        onError={() => setFontsLoaded(false)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
