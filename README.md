# Reviews App

This project was generated with [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) version 4.9.1.

## Where is the tutorial?

https://www.youtube.com/watch?v=cFVHTazhb7I&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=16

## Using [custom fonts](https://docs.expo.dev/guides/using-custom-fonts/)

### Using Google Fonts

* Expo has a support for all fonts listed in [Google Fonts](https://fonts.google.com/).
* To use the Inter font you can install the @expo-google-fonts/inter package with the command below.
  > expo install expo-font @expo-google-fonts/inter
* After that, you can integrate this in your project by using the useFonts hook in the root of your app.
  > ```js
  > import React from 'react';
  > import { View, Text } from 'react-native';
  > import AppLoading from 'expo-app-loading';
  > import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
  > export default function App() {
  >   let [fontsLoaded] = useFonts({
  >     Inter_900Black,
  >   });
  > 
  >   if (!fontsLoaded) {
  >     return <AppLoading />;
  >   } else {
  >     return (
  >       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  >         <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Inter Black</Text>
  >       </View>
  >     );
  >   }
  > }
  > ```

### Loading a font directly

* Install expo-app-loading
  > npm install expo-app-loading
* Copy the assets to a folder, and create a function which will call Font.loadAsync.
  > ```js
  > const getFonts = () => Font.loadAsync({
  >   'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  >   'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  > });
  > ```
* Create a state to check whether fonts are loaded or not.
  > ```js
  > const [ fontsLoaded, setFontsLoaded ] = useState(false);
  > ```
* Render the application according to the state. Use AppLoading component to call the function which is responsible from loading the fonts and set the state when the loading is finished. So, application can be rendered.
  > ```js
  > if (fontsLoaded)
  > {
  >   return (
  >     <Home />
  >   );
  > } else {
  >   return (
  >     <AppLoading 
  >       startAsync={getFonts}
  >       onError={() => setFontsLoaded(false)}
  >       onFinish={() => setFontsLoaded(true)}
  >     />
  >   );
  > }
  > ```

## Setup [React Navigation](https://reactnavigation.org/)

* Install React Navigation
  > npm install react-navigation
* Install the required packages in your React Native project
  > npm install @react-navigation/native
* Installing dependencies into an Expo managed project
  > expo install react-native-screens react-native-safe-area-context
