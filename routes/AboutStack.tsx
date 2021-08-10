import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/About";

const screens = {
  Home: {
    screen: About,
    navigationOptions: {
      title: 'About',
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
