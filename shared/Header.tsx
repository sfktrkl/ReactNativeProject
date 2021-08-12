import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { NavigationRoute, NavigationParams } from 'react-navigation';
import { NavigationDrawerProp } from "react-navigation-drawer"

export type NavigationDrawerProps = {
  navigation: NavigationDrawerProp<NavigationRoute, NavigationParams>;
  title: string;
 };

import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }: NavigationDrawerProps) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    // height is defined in the stack navigator as a navigaton option.
    // So, use that height completely.
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
