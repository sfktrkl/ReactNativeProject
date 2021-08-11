import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";

import { GlobalStyles, images } from '../styles/Global';
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
        <Text>{navigation.getParam('body')}</Text>
        <View style={GlobalStyles.rating}>
          <Text>Rating: </Text>
          { /* Dynamically output an image according to the rating.
                Using string concatenation this can not be done since require doesn't
                get a concatenated string. Hence, define images somewhere else and then
                use one of them dynamically (in GlobalSytles for example).
                Get those images (images.ratings) and then select the one to be applied. */ }
          <Image source={images.ratings[navigation.getParam('rating')]} />
        </View>
      </Card>
      <Button title="Go to home with goBack" onPress={pressHandler} />
    </View>
  );
}
