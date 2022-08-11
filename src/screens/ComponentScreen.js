import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  return (
    <Text>
    <Text style={styles.textStyle}>This is ComponentScreen</Text>
    <Text>Hi there!</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentScreen