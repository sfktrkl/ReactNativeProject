import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export type FlatButtonProps = {
  text: string,
  onPress: () => void,
}

export default function FlatButton({ text, onPress }: FlatButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
