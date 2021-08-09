import { StyleSheet } from 'react-native';

// Create some global styles so that they can be used in
// any component or screen which will be created if needed.
export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
