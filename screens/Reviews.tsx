import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";

import { GlobalStyles } from '../styles/Global';
import Card from '../shared/Card';

export default function Reviews({ navigation }: NavigationStackScreenProps) {
  const pressHandler = () => {
    // Header provided with the navigator will automatically have a back button
    // if it is possible to go back from the active screen. Same behaviour
    // can be executed by calling goBack.
    navigation.goBack();
    // Pop action is also can be used to navigate through previous screens in a stacks.
    // It may take an argument which allows to specify how many screens to pop back.
    //navigation.pop(2  /* optional */);
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Review screen</Text>
      { /* navigation.getParam method of navigation will return a specific parameter which
            is passed through an object. */ }
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>Rating: {navigation.getParam('rating')}</Text>
        <Text>{navigation.getParam('body')}</Text>
      </Card>
      <Button title="Go to home with goBack" onPress={pressHandler} />
    </View>
  );
}
