import React from "react"

import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Reviews from "../screens/Reviews";
import Header from "../shared/Header";
import { defaultNavigationOptions } from "../styles/Global";

// Each key value pair is to configure a particular screen.
const screens = {
  // The component in the top is the one shown by default.
  Home: {
    // Which component should be shown.
    screen: Home,
    // When using StackNavigator, it automatically creates an header which contains
    // name of the screen and a back button (if any screen exists in stack) etc.
    // To be able to edit it NavigationOptions can be created for each screen.
    // Make a navigationOptions a function, so that it can take the navigation object.
    // When it has an access to the navigation object, it can be passed as a prop.
    navigationOptions: ({ navigation }: any) => {
      return {
        // Instead of placing a title for the screen, it can be replaced by a component
        // by using headerTitle and a function which returns the component.
        headerTitle: () => <Header navigation={navigation} title='Game Zone'/>,
      };
    },
  },
  Reviews: {
    screen: Reviews,
    navigationOptions: {
      title: 'Review Details',
    },
  },
};

// Create the stack navigator using createStackNavigator function
// and pass objects which will used to configure which screens
// will be registered to the navigator.
const HomeStack = createStackNavigator(screens, {
  // Each screen can have its own options, but it is not worth settings
  // same options to each screen. Hence, as a second parameter a default
  // navigation option can be passed (it can be overriden in screens).
  defaultNavigationOptions: defaultNavigationOptions,
});

// Returs the component which will be rendered from the navigation stack.
// App container is not needed anymore, drawer navigator will be surround by 
// the app container so that can be rendered on the App.
// export default createAppContainer(HomeStack);
export default HomeStack;
