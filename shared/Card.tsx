import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactElement | React.ReactElement[];
}

export default function Card(props: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { /* children is the components which are nested by the Card component
          For example, 
          <Card>
            // These are the children.
            <Text>Hello</Text>
            <Text>Hi</Text>
          </Card>
          */ }
        { props.children }
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
