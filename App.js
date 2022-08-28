import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.h1}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  h1: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
});
