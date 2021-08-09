import React from 'react';
import { Text, View, Button } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

import { GlobalStyles } from '../styles/Global';

// When navigation stack is configured, every screen configured
// gets a navigation property on the props assigned to it.
export default function Home({ navigation }: NavigationStackScreenProps) {
  // When button is pressed pressHandler called, screen will open and
  // also in the header there will be back button automatically.
  const pressHandler = () => {
    // Navigate action will pop back to earlier stack if a component is already mounted.
    // Otherwise it will push the route to the stack and navigate to it.
    navigation.navigate('Reviews');
    // Push action adds a route on top of the stack and navigates forward.
    // So, it can mount a component multiple times by adding to top of the stack.
    //navigation.push('Reviews');
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home screen</Text>
      <Button title="Go to review with navigate" onPress={pressHandler} />
    </View>
  );
}
