import React from "react"

import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/About";
import Header from "../shared/Header";

const screens = {
  Home: {
    screen: About,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About Game Zone'/>,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#bbb',
      height: 80,
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontFamily: 'nunito-bold',
    },
  }
});

// Nest this inside a drawer navigator, like HomeStack.
export default AboutStack;
