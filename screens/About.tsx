import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyles } from '../styles/Global';

export default function About() {
  return (
    <View style={GlobalStyles.container}>
      <Text>About screen</Text>
    </View>
  );
}
