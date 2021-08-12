import React, { useState } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, Modal } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

import { MaterialIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../styles/Global';
import Card from '../shared/Card';

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

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  // Initially set Modal visibility to false.
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home screen</Text>

      { /* Modal is works like a popup. Inside it, a form can be placed which
            user can enter an input. Toggle visible prop to show/hide the modal.*/ }
      <Modal visible={modalOpen} animationType='slide'>
        <View style={GlobalStyles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24}
              style={{ ...GlobalStyles.modalToggle, ...GlobalStyles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
        </View>
      </Modal>

      { /* Create a button to change Modal visibility state. */ }
      <MaterialIcons 
        name='add'
        size={24}
        style={GlobalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      { /* To pass the data through navigator, navigate to the screen and as a second
            argument pass the object (data), its properties can be accessed with getParam. */ }
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Reviews", item)}>
            { /* Wrap the text component with card, so that it can style the children. */ }
            <Card>
              <Text style={GlobalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button title="Go to review with navigate" onPress={pressHandler} />
    </View>
  );
}
