import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

// Drawer navigation allows switching between screens. It doesn't have a stack
// and completely replaces the screen. So, stack navigator will provide 
// the transition between home and reviews screen, and the drawer navigator
// will provide the connectivity with other screens.
// Drawer navigator doesn't automatically show the header. Hence about screen
// should also be wrapped with a stack navigator to have that header.
const RootDrawerNavigator = createDrawerNavigator({
  HomeStack: {
    // Instead of using Home component, use the HomeStack.
    // As default it redirects to the Home screen.
    screen: HomeStack,
    navigationOptions: {
      title: 'Home',
    },
  },
  AboutStack: {
    screen: AboutStack,
    navigationOptions: {
      title: 'About',
    },
  },
});

// Return the drawer navigator, so that it can be rendered.
// Since the top option is the HomeStack it will show that.
export default createAppContainer(RootDrawerNavigator);
