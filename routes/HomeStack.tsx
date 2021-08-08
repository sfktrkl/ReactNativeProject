import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Reviews from "../screens/Reviews";

// Each key value pair is to configure a particular screen.
const screens = {
  // The component in the top is the one shown by default.
  Home: {
    // Which component should be shown.
    screen: Home,
  },
  Reviews: {
    screen: Reviews
  },
};

// Create the stack navigator using createStackNavigator function
// and pass objects which will used to configure which screens
// will be registered to the navigator.
const HomeStack = createStackNavigator(screens);

// Returs the component which will be rendered from the navigation stack.
export default createAppContainer(HomeStack);
