import { ImageSourcePropType, StyleSheet } from 'react-native';

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
