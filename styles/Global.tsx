import { ImageSourcePropType, StyleSheet } from 'react-native';
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';

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
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  modalToggle: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});

export type Images = {
  ratings: {
    [key: string]: ImageSourcePropType
  }
}

export const images: Images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  },
};

export const defaultNavigationOptions: StackNavigationOptions = {
  headerTitleContainerStyle: {
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  headerStyle: {
    backgroundColor: '#bbb',
    height: 80,
  },
  headerTintColor: '#333',
  headerTitleStyle: {
    flex: 1,
    fontFamily: 'nunito-bold',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
}
